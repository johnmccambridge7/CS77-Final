import {
  createShaderProgram,
  SolidFragmentSource,
  SolidVertexSource,
  TriangleMesh
} from './common';
import { Vector } from './vector';
import { CubePositions, CubeIndices } from './cube';
import { Matrix } from './matrix';

export class Joint {
  /**
   * 
   * @param {*} v0 - origin in world coords
   * @param {*} v1 - end in world coords
   */
  constructor(parent, v0, v1, name, gl) {
    this.mParent = parent;
    this.mOriginPosition = v0;
    this.mEndPosition = v1;
    this.mName = name;
    this.mLength = v1.subtract(v0).length();
    this.mBindingMatrix = null;
    this.gl = gl;

    let shader = createShaderProgram(gl, SolidVertexSource, SolidFragmentSource);
    this.mesh = new TriangleMesh(
      gl,
      CubePositions,
      CubeIndices,
      shader,
      true,
      true,
      new Vector(0.4, 0.7, 0.4),
      new Vector(0.5, 1, 0.5)
    );

    this.mJointAngle = null;
    this.mJointAxis = null;

    recomputeJointAngleAndAxis(this);
  }

  setJointOrigin(v0) {
    this.mOriginPosition = v0;
    recomputeJointAngleAndAxis(this);
  }

  setJointEnd(v1) {
    this.mEndPosition = v1;
    recomputeJointAngleAndAxis(this);
  }

  setJointEndpoints(v0, v1) {
    this.setJointOrigin(v0);
    this.setJointEnd(v1);
  }

  getJointEndPoints() {
    return {
      v0: this.mOriginPosition,
      v1: this.mEndPosition
    };
  }

  // NOTE: if the skeleton has not been attached to the skin yet, this returns null
  getBindingMatrix() {
    return this.mBindingMatrix;
  }

  getName() {
    return this.mName;
  }

  getLocalMatrix() {
    // Returns the local transform of the current joint
    var localMatrix = new Matrix();
    var rotateMatrix = Matrix.rotate(this.mJointAngle, this.mJointAxis.x, this.mJointAxis.y, this.mJointAxis.z);
    var translateMatrix = Matrix.translate(this.mOriginPosition.x, this.mOriginPosition.y, this.mOriginPosition.z);
    return localMatrix.multiply(translateMatrix).multiply(rotateMatrix);
  }

  getWorldMatrix() {
    // Returns the world transform of the current joint.
    // since we are not using a hierarchy, this is the same as the local transform
    return this.getLocalMatrix();
  }

  computeBindingMatrix() {
    // Returns the end points of the joint in world space
    // Can be used to compute the distance to the line segment
    // The returned values are 'v0' and 'v1'
    this.mBindingMatrix = new Matrix();
    this.mBindingMatrix = this.getWorldMatrix().inverse();
    return this.mBindingMatrix;
  }

  // Computes the model matrix used to draw the joint.
  computeModelMatrix() {
    var pose = this.getWorldMatrix();
    // Do a scaling about the origin of the cube for the correct size
    var sMatrix = Matrix.scale(this.mLength, 0.2, 0.2);
    // And then offset it to coincide with the joint
    var tMatrix = Matrix.translate(this.mLength / 2, 0, 0);
    return pose.multiply(tMatrix.multiply(sMatrix));
  }

  // Renders the joint as a cube
  render(gl, view, projection) {
    this.mModelMatrix = this.computeModelMatrix();
    this.mesh.render(gl, this.mModelMatrix, view, projection);
  }
}

// helpers
const recomputeJointAngleAndAxis = function(joint) {
  const pv0 = joint.mParent?.mOriginPosition || joint.mOriginPosition.subtract(new Vector(1, 0, 0));
  const pv1 = joint.mParent?.mEndPosition || joint.mOriginPosition;
  const v0 = joint.mOriginPosition;
  const v1 = joint.mEndPosition;

  // calculate joint angle based on parent endpoints and current endpoints
  let b1 = pv0.subtract(pv1);
  let b2 = v1.subtract(v0);

  let dot = b1.dot(b2);
  let angle = Math.acos(-dot / (b1.length() * b2.length()));

  let jointAxis = b1.cross(b2).unit();
  // set some default axis if angle is zero
  if (!jointAxis.length()) jointAxis.x = 1;

  joint.mJointAngle = angle * (180 / Math.PI);
  joint.mJointAxis = jointAxis;
}
