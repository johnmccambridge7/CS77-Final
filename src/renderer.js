import { SkinMesh } from './skin';
import { Skeleton } from './skeleton';
import { Matrix } from './matrix';
import { Joint } from './joint';
import { Vector } from './vector';

export class HandRenderer {
  constructor(gl) {
    // set camera pose
    this.pitch = 0;
    this.yaw = 0;

    // Create a skin mesh
    this.skin = new SkinMesh(gl);
    this.skin.createArmSkin();

    // Create an empty skeleton for now.
    this.skeleton = new Skeleton();

    // add joints
    let joints = [];

    // make arm
    var arm1 = new Joint(null, new Vector(-15, 0, 0), new Vector(-8.75, 0, 0), 'arm1', gl);
    var arm2 = new Joint(arm1, new Vector(-8, 0, 0), new Vector(-3, 0, 0), 'arm2', gl);
    joints.push(arm1, arm2);

    console.log('arm1 joint angle: ' + arm1.mJointAngle);
    console.log('arm2 joint angle: ' + arm2.mJointAngle);

    // pass joints to skeleton
    joints.map(j => this.skeleton.addJoint(j));

    // pass skeleton to skin
    this.skin.setSkeleton(this.skeleton, 'linear');

    gl.enable(gl.DEPTH_TEST);
  }

  render(gl, w, h) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var projection = Matrix.perspective(60, w / h, 0.1, 100);
    var view = Matrix.translate(0, 0, -10).multiply(
      Matrix.rotate(this.pitch, 1, 0, 0)).multiply(
        Matrix.rotate(80, 0, 1, 0)).multiply(
          Matrix.translate(8, 0, 0)).multiply(
            Matrix.rotate(30, 1, 0, 0));

    if (this.skin) {
      this.skin.render(gl, view, projection, false);
    }

    if (this.skeleton) {
      gl.clear(gl.DEPTH_BUFFER_BIT);
      this.skeleton.render(gl, view, projection);
    }
  }

  setJointEndpoints(id, v0, v1) {
    if (this.skeleton && id < this.skeleton.getNumJoints()) {
      this.skeleton.getJoint(id).setJointEndpoints(v0, v1);
      this.skin.updateSkin();
    }
  }

  dragCamera(dx, dy) {
    this.pitch = Math.min(Math.max(this.pitch + dy * 0.5, -180), 180);
    this.yaw = this.yaw + dx * 0.5;
  }
}
