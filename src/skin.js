import {
	createShaderProgram,
	SolidVertexSource,
	SolidFragmentSource,
	WeightVertexSource,
	WeightFragmentSource,
	WeightShadedTriangleMesh,
	TriangleMesh
} from './common';
import {
	armPositions,
	armIndices,
} from './arm';
import { Matrix } from './matrix';
import { Vector } from './vector';

function computeDistanceToLine(pt, vertex0, vertex1) {
	var v0 = new Vector(vertex0.x, vertex0.y, vertex0.z);
	var v1 = new Vector(vertex1.x, vertex1.y, vertex1.z);

	var resultant = v1.subtract(v0);
	var normalVector = resultant.unit();
	var deltaVector = pt.subtract(v0);

	var projectionLength = normalVector.dot(deltaVector);

	if (projectionLength < 0.0) {
		return v0.subtract(pt).length();
	} else if (projectionLength > resultant.length()) {
		return v1.subtract(pt).length();
	} else {
		return Math.abs(resultant.cross(deltaVector).length() / resultant.length());
	}
}

// SkinMesh represents a triangle mesh that will be skinned with a skeleton.
export class SkinMesh {
	constructor(gl) {
		// Original (undeformed) mesh data
		this.mOriginalPositions = new Array();
		this.mIndices = new Array();

		// The transformed (skinned) vertex positions
		this.mTransformedPositions = new Array();

		// Weights for each vertex and bone combination
		this.mWeights = new Array();

		// The skin does not have a skeleton initially bound to it.
		// Once the skin has a skeleton bound to it, the corresponding
		// binding matrices for each joint have to be computed.
		this.mSkeleton = null;

		this.gl = gl;

		// Flag to toggle weight display 
		this.mShowWeights = false;

		// The current selected joint for showing weights.
		// This is set by selecting the appropriate joint button in the UI.
		this.mWeightJoint = null;

		// An array that is used to store the weights of the selected joint
		this.mSelectedJointWeights = null;

		// The mesh that draws the weights of the selected joint.
		this.mWeightMesh = null;

		// The actual mesh of the transformed skin.
		this.mMesh = null;

		// Stores the current skinning mode
		this.mSkinMode = null;

		// Various shaders
		this.shader = createShaderProgram(gl, SolidVertexSource, SolidFragmentSource);
		this.wShader = createShaderProgram(gl, WeightVertexSource, WeightFragmentSource);
	}

	// Helper function to retrieve the weight of a vertex with respect to a particular joint
	getVertexWeight(idx, joint) {
		var numJoints = this.mSkeleton.getNumJoints();
		return this.mWeights[idx * numJoints + joint];
	}

	// Helper function to set the weight of a vertex with respect to a particular joint
	setVertexWeight(idx, joint, weight) {
		var numJoints = this.mSkeleton.getNumJoints();
		this.mWeights[idx * numJoints + joint] = weight;
	}

	// Helper function to return the number of vertices in the current mesh
	getNumVertices() {
		return this.mOriginalPositions.length / 3;
	}

	// Helper method to get a vertex with 'id'
	getVertex(idx) {
		return new Vector(this.mOriginalPositions[idx * 3 + 0], this.mOriginalPositions[idx * 3 + 1], this.mOriginalPositions[idx * 3 + 2]);
	}

	// Helper method to set a transformed vertex into the correct location.
	setTransformedVertex(idx, vtx) {
		this.mTransformedPositions[idx * 3 + 0] = vtx.x;
		this.mTransformedPositions[idx * 3 + 1] = vtx.y;
		this.mTransformedPositions[idx * 3 + 2] = vtx.z;
	}

	// Returns the joint for which the vertex has a weight 1.
	// Essentially returning the rigid joint.
	getRigidlyAttachedJoint(id) {
		var numJoints = this.mSkeleton.getNumJoints();
		for (var b = 0; b < numJoints; b++)
			if (this.mWeights[id * numJoints + b] == 1)
				return this.mSkeleton.getJoint(b);
	}

	// NOTE: This function computes fixed weights only for the cylinder mesh
	//       Don't use this function for other meshes. It assumes there are only two joints
	// 		 as indicated in the assignment.
	computeRigidWeights() {
		if (this.mSkeleton) {
			for (var i = 0; i < this.getNumVertices(); i++) {
				var pos = this.getVertex(i);

				if (pos.x < 0.0) {
					// Give full weight to joint #0
					this.setVertexWeight(i, 0, 1.0);
					this.setVertexWeight(i, 1, 0.0);
				} else {
					// Give full weight to joint #1
					this.setVertexWeight(i, 0, 0.0);
					this.setVertexWeight(i, 1, 1.0);
				}
			}
		} else {
			console.log("No skeleton bound to skin");
		}
	}

	// TODO: Task 1 - Subtask 2
	// Implement rigid skinning
	rigidSkinning() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var pos = this.getVertex(i);
			var joint = this.getRigidlyAttachedJoint(i);
			var boneTransform = joint.getWorldMatrix().multiply(joint.getBindingMatrix());
			var transformedPos = boneTransform.transformPoint(pos);
			this.setTransformedVertex(i, transformedPos);
		}
	}

	// TODO: Task 2 - Subtask 2
	//
	// Compute smoothly blended vertex weights
	computeLinearBlendedWeights() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var sum = 0.0;
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				var joint = this.mSkeleton.getJoint(j);
				var { v0, v1 } = joint.getJointEndPoints();
				var distance = computeDistanceToLine(this.getVertex(i), v0, v1);
				this.setVertexWeight(i, j, 1 / Math.pow(distance, 4.0));
				sum += this.getVertexWeight(i, j);
			}
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				this.setVertexWeight(i, j, this.getVertexWeight(i, j) / sum);
			}
		}
	}

	// TODO: Task 2 - Subtask 3
	// Implement linear blended skinning
	linearBlendSkinning() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var transformedPos = new Vector();
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				var weight = this.getVertexWeight(i, j);
				var joint = this.mSkeleton.getJoint(j);
				var boneTransform = joint.getWorldMatrix().multiply(joint.getBindingMatrix());
				var transformedVertex = boneTransform.transformPoint(this.getVertex(i));
				transformedPos = transformedPos.add(transformedVertex.multiply(weight));
			}
			this.setTransformedVertex(i, transformedPos);
		}
	}

	// Update skin called whenever a change is detected in the joint.
	// Typically caused by the UI angle change
	// However in case of animations, you can use this function to do the same functionality.
	updateSkin() {
		this.linearBlendSkinning();

		if (!this.mShowWeights)
			this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.mIndices, this.shader);

		else
			this.mWeightMesh = new WeightShadedTriangleMesh(this.gl, this.mTransformedPositions, this.mSelectedJointWeights, this.mIndices, this.wShader);
	}

	// Creates a cylinder mesh along the x-axis
	createCylinderSkinX(rad) {
		// Create a cylinder from [-2 : 2]
		var startX = -2.0;
		var endX = 2.0;
		var numXSegments = 16;
		var numThetaBands = 16;
		var factor = (endX - startX) / numXSegments;

		var radius = 1.0;
		if (rad)
			radius = rad;

		// Fill in the position data
		for (var i = 0; i <= numXSegments; i++) {
			for (var j = 0; j < numThetaBands; j++) {
				var theta = 2 * Math.PI * j / numThetaBands;

				var y = radius * Math.sin(theta);
				var z = radius * Math.cos(theta);

				this.mOriginalPositions.push(startX);
				this.mOriginalPositions.push(y);
				this.mOriginalPositions.push(z);

				this.mTransformedPositions.push(startX);
				this.mTransformedPositions.push(y);
				this.mTransformedPositions.push(z);

				// for every band
				if (i < numXSegments) {
					var i0 = i, i1 = i + 1;
					var j0 = j, j1 = (j + 1) % numThetaBands;
					this.mIndices.push(i0 * numThetaBands + j0);
					this.mIndices.push(i0 * numThetaBands + j1);
					this.mIndices.push(i1 * numThetaBands + j1);
					this.mIndices.push(i0 * numThetaBands + j0);
					this.mIndices.push(i1 * numThetaBands + j1);
					this.mIndices.push(i1 * numThetaBands + j0);
				}
			}
			startX = startX + factor;
		}

		// create the mesh
		this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.mIndices, this.shader);
	}

	createArmSkin() {
		for (var i = 0; i < armPositions.length; i++) {
			this.mOriginalPositions.push(armPositions[i]);
			this.mTransformedPositions.push(armPositions[i]);

			// Flip it around the x-axis and offset it a little bit
			if ((i % 3) == 0) {
				this.mOriginalPositions[i] = -10.0 - this.mOriginalPositions[i];
				this.mTransformedPositions[i] = -10.0 - this.mTransformedPositions[i];
			}
		}

		// Do zero offsetting for obj file using a '1'-indexing scheme
		for (var i = 0; i < armIndices.length; i++) {
			this.mIndices.push(armIndices[i] - 1);
		}

		// compute only edge segments
		this.newIndices = new Array();

		for (var i = 0; i < armIndices.length / 3; i++) {
			var i0 = this.mIndices[i * 3 + 0];
			var i1 = this.mIndices[i * 3 + 1];
			var i2 = this.mIndices[i * 3 + 2];

			this.newIndices.push(i0);
			this.newIndices.push(i1);
			this.newIndices.push(i1);
			this.newIndices.push(i2);
			this.newIndices.push(i2);
			this.newIndices.push(i0);
		}

		this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.newIndices, this.shader);
	}

	// Attaches ("binds") a skeleton to the skin.
	// Also computes binding matrices and vertex weights.
	setSkeleton(val, mode) {
		this.mSkeleton = val;

		if (this.mSkeleton)
			this.mSkeleton.computeBindingMatrices();

		this.mWeights = new Array(this.getNumVertices() * this.mSkeleton.getNumJoints());

		// We have a skeleton now.
		// We can compute weights for each vertex
		this.mSkinMode = mode;
		if (mode == "linear") {
			this.computeLinearBlendedWeights();
		}

		else {
			this.computeRigidWeights();
		}
	}

	// Generates the mesh that displays the vertex weights of the selected joint
	showJointWeights(id) {
		this.mShowWeights = id >= 0;
		this.mWeightJoint = id;

		if (this.mShowWeights && this.mSkeleton) {
			// weights was toggled
			// create a new mesh with the correct weights
			this.mSelectedJointWeights = new Array();
			var numJoints = this.mSkeleton.getNumJoints();

			for (var i = 0; i < this.mOriginalPositions.length / 3; i++) {
				// get only weights for the joint selected
				//var temp = this.mWeights[i * numJoints + this.mWeightJoint];
				var temp = this.getVertexWeight(i, this.mWeightJoint);
				this.mSelectedJointWeights.push(temp);
			}

			this.mWeightMesh = new WeightShadedTriangleMesh(this.gl, this.mTransformedPositions, this.mSelectedJointWeights, this.mIndices, this.wShader);
		}

		else {
			console.log("No skeleton bound to compute weights");
		}
	}

	// Renders a skin mesh with the selected options.
	render(gl, view, projection, drawWireFrame) {
		if (!this.mShowWeights) {
			if (this.mesh) {
				this.mesh.render(gl, new Matrix(), view, projection, drawWireFrame);
			}
		}

		else {
			if (this.mWeightMesh && this.mSkeleton) {
				this.mWeightMesh.render(gl, new Matrix(), view, projection);
			}
		}
	}
}
