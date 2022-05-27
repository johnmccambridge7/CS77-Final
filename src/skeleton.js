// Skeleton class contains all the bones in an array
// Hierarchies are established through the bones themselves.
export class Skeleton {
	constructor(_gl) {
		this.mJoints = new Array();
	}

	// Add a joint to the skeleton list.
	addJoint(val) {
		this.mJoints.push(val);
	}

	// Given an index into the skeleton hierarchy, return the actual joint.
	getJoint(index) {
		if (index < this.mJoints.length)
			return this.mJoints[index];
		else
			return null;
	}

	// Return the number of joints within the skeleton
	getNumJoints() {
		return this.mJoints.length;
	}

	getJointName(index) {
		if (index < this.mJoints.length)
			return this.mJoints[index].mName;
		else
			return null;
	}

	computeBindingMatrices() {
		for (var i = 0; i < this.mJoints.length; i++)
			this.mJoints[i].computeBindingMatrix();
	}

	// Iterates through all the joints in the skeleton
	// and renders them as a wireframe mesh.
	render(gl, view, projection) {
		for (var i = 0; i < this.mJoints.length; i++)
			this.mJoints[i].render(gl, view, projection);
	}
}
