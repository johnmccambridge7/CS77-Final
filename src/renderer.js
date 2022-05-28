import { SkinMesh } from './skin';
import { Skeleton } from './skeleton';
import { Matrix } from './matrix';
import { Joint } from './joint';
import { Vector } from './vector';

export class HandRenderer {
  constructor(gl) {
    // set camera pose
    this.pitch = 60;
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
      '1': wrist.add(new Vector(0, 0, -0.75)),
      '2': wrist.add(new Vector(0.8, 0, -1.15)),
      '3': wrist.add(new Vector(1.4, 0, -1.3)),
      '4': wrist.add(new Vector(1.8, 0, -1.45)),
      5: wrist.add(new Vector(1.7, 0, -0.85)),
      6: wrist.add(new Vector(2.4, 0, -0.95)),
      7: wrist.add(new Vector(2.8, 0, -1)),
      8: wrist.add(new Vector(3.1, 0, -1.08)),
      9: wrist.add(new Vector(1.8, 0, -0.25)),
      10: wrist.add(new Vector(2.6, 0, -0.3)),
      11: wrist.add(new Vector(3.1, 0, -0.35)),
      12: wrist.add(new Vector(3.5, 0, -0.4)),
      13: wrist.add(new Vector(1.75, 0, 0.25)),
      14: wrist.add(new Vector(2.4, 0, 0.3)),
      15: wrist.add(new Vector(2.85, 0, 0.35)),
      16: wrist.add(new Vector(3.18, 0, 0.38)),
      17: wrist.add(new Vector(1.55, 0, 0.65)),
      18: wrist.add(new Vector(2.1, 0, 0.7)),
      19: wrist.add(new Vector(2.35, 0, 0.75)),
      20: wrist.add(new Vector(2.62, 0, 0.85)),
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

  render(gl, w, h) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var projection = Matrix.perspective(60, w / h, 0.1, 100);
    var view = Matrix.translate(-8, 0, -10).multiply(
      Matrix.rotate(this.pitch, 1, 0, 0)).multiply(
        Matrix.rotate(this.yaw, 0, 1, 0)).multiply(
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
