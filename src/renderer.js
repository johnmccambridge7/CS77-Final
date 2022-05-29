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

    // set wrist anchor
    const wrist = new Vector(-2, 0, 0.25);

    // set initial landmark positions (numbered according to fig 2 of https://google.github.io/mediapipe/solutions/hands.html)
    const landmarks = {
      '-2': new Vector(-15, 0, 0),
      '-1': new Vector(-8.4, 0, 0.15),
      '0': wrist,
      '1': wrist.add(new Vector(0, -0.1, -0.75)),
      '2': wrist.add(new Vector(0.8, -0.45, -1.15)),
      '3': wrist.add(new Vector(1.4, -0.7, -1.4)),
      '4': wrist.add(new Vector(1.8, -0.9, -1.55)),
      5: wrist.add(new Vector(1.7, -0.1, -0.85)),
      6: wrist.add(new Vector(2.4, -0.35, -0.95)),
      7: wrist.add(new Vector(2.8, -0.525, -1)),
      8: wrist.add(new Vector(3.1, -0.65, -1.08)),
      9: wrist.add(new Vector(1.8, -0.1, -0.25)),
      10: wrist.add(new Vector(2.6, -0.3, -0.3)),
      11: wrist.add(new Vector(3.1, -0.48, -0.35)),
      12: wrist.add(new Vector(3.5, -0.55, -0.4)),
      13: wrist.add(new Vector(1.75, -0.15, 0.25)),
      14: wrist.add(new Vector(2.4, -0.38, 0.3)),
      15: wrist.add(new Vector(2.85, -0.5, 0.35)),
      16: wrist.add(new Vector(3.18, -0.58, 0.38)),
      17: wrist.add(new Vector(1.55, -0.25, 0.65)),
      18: wrist.add(new Vector(2.1, -0.55, 0.78)),
      19: wrist.add(new Vector(2.35, -0.7, 0.84)),
      20: wrist.add(new Vector(2.68, -0.85, 0.93)),
    };
    const joints = [
      // arm
      { v0: '-2', v1: '-1', name: 'upper arm' },
      { v0: '-1', v1: '0',  name: 'lower arm' },
      // thumb
      { v0: '0', v1: '1', name: 'thumb 1' },
      { v0: '1', v1: '2', name: 'thumb 2' },
      { v0: '2', v1: '3', name: 'thumb 3' },
      { v0: '3', v1: '4', name: 'thumb 4' },
      // palm
      { v0: '0',  v1: '5',  name: 'palm 1' },
      { v0: '0',  v1: '17', name: 'palm 2' },
      { v0: '5',  v1: '9',  name: 'palm 3' },
      { v0: '9',  v1: '13', name: 'palm 4' },
      { v0: '13', v1: '17', name: 'palm 5' },
      // index
      { v0: '5', v1: '6', name: 'index 1' },
      { v0: '6', v1: '7', name: 'index 2' },
      { v0: '7', v1: '8', name: 'index 3' },
      // middle
      { v0: '9',  v1: '10', name: 'middle 1' },
      { v0: '10', v1: '11', name: 'middle 2' },
      { v0: '11', v1: '12', name: 'middle 3' },
      // ring
      { v0: '13', v1: '14', name: 'ring 1' },
      { v0: '14', v1: '15', name: 'ring 2' },
      { v0: '15', v1: '16', name: 'ring 3' },
      // pinky
      { v0: '17', v1: '18', name: 'pinky 1' },
      { v0: '18', v1: '19', name: 'pinky 2' },
      { v0: '19', v1: '20', name: 'pinky 3' }
    ];

    // helper
    const addSeparation = (v0, v1) => {
      const sep = 0.075; // 7.5%
      return [
        v0.add(v1.subtract(v0).multiply(sep)),
        v1.add(v0.subtract(v1).multiply(sep))
      ]
    };

    // pass joints to skeleton
    Object.values(joints).map(j => {
      const v0 = landmarks[j.v0];
      const v1 = landmarks[j.v1];
      this.skeleton.addJoint(new Joint(
        null,
        ...addSeparation(v0, v1),
        j.name,
        gl
      ));
    });

    // pass skeleton to skin
    this.skin.setSkeleton(this.skeleton, 'linear');

    gl.enable(gl.DEPTH_TEST);
  }

  /* 
  1  0  0  0 | 1
  0  1  0  0 | 1
  0  0  1  0 | 1
  0  0  0  1 | 1


  */  
  transformVector(m, v) {
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z,
      m[4] * v.x + m[5] * v.y + m[6] * v.z,
      m[8] * v.x + m[9] * v.y + m[10] * v.z
    );
  }

  render(gl, w, h, positions) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var projection = Matrix.perspective(60, w / h, 0.1, 100);
    var view = Matrix.translate(-8, 0, -5).multiply(
      Matrix.rotate(this.pitch, 1, 0, 0)).multiply(
        Matrix.rotate(this.yaw, 0, 1, 0)).multiply(
          Matrix.translate(8, 0, 0)).multiply(
            Matrix.rotate(30, 1, 0, 0));

    if (this.skin) {
      this.skin.render(gl, view, projection, false);
    }

    if (this.skeleton) {
      gl.clear(gl.DEPTH_BUFFER_BIT);

      // loop over every position in the new hand positions
      // for (var i = 2; i < positions.length; i++) {
        // get the position

      if (positions.length > 0) {
        var unformatted = positions[0];
        var position = {x: unformatted.x - 0.5, y: unformatted.y - 0.5, z: unformatted.z - 0.5};
      
        // -0.5 offsets the wrist to the center of screen

        // x: right
        // y: up
        // z: towards camera
        // console.log(position);

        // left to right from mediapipe, goes up and down (x, y)

        // get the joint
        var joint = this.skeleton.getJoint(1); // corresponds to thumb one
        // set the position

        var xRot = Matrix.rotate(180, 1, 0, 0);
        var yRot = Matrix.rotate(-270, 0, 1, 0);

        var wristVector = new Vector(4.0*position.x, 4.0*position.y, 4.0*position.z);
        var rotWristVector = this.transformVector(xRot.m, wristVector); // wristVector.multiply(Matrix.rotate(0, 1, 1, 1)); // .multiply(Matrix.rotate(180, 0, 1, 0));
        var f = this.transformVector(yRot.m, rotWristVector);
        // console.log(wristVector, rotWristVector);
        joint.setJointEnd(new Vector(f.x, f.y, f.z));
      }
      // }

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
