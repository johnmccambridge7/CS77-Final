import '@mediapipe/hands';
import '@mediapipe/camera_utils';
import '@mediapipe/drawing_utils';

import { ButtonGroup, div } from './uiUtil';
import { HandRenderer } from './renderer';

// why does mediapipe mount this here? no idea
const { Hands, Camera, drawLandmarks } = window;

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

function setupTask(canvasId, taskFunction) {
  const videoElement = document.getElementsByClassName('input_video')[0];
  // const canvasElement = document.getElementsByClassName('output_canvas')[0];
  // const canvasCtx = canvasElement.getContext('2d');

  var renderLoop;

  // canvasCtx.save();
  // canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  var canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.log("Could not find canvas with id", canvasId);
    return;
  }

  try {
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}
  if (!gl) {
    console.log("Could not initialise WebGL");
    return;
  }

  var renderWidth, renderHeight;
  function computeCanvasSize() {
    renderWidth = 1600; // Math.min(canvas.parentNode.clientWidth - 20, 820);
    renderHeight = 800; // Math.floor(renderWidth * 9.0 / 16.0);
    canvas.width = renderWidth;
    canvas.height = renderHeight;
    gl.viewport(0, 0, renderWidth, renderHeight);
  }

  window.addEventListener('resize', computeCanvasSize);
  computeCanvasSize();

  var task = new taskFunction(gl);

  var mouseDown = false;
  var lastMouseX, lastMouseY;
  var positions = [];

  var mouseMoveListener = function(event) {
    task.dragCamera(event.screenX - lastMouseX, event.screenY - lastMouseY);
    lastMouseX = event.screenX;
    lastMouseY = event.screenY;
  };
  
  canvas.addEventListener('mousedown', function(event) {
    if (!mouseDown && event.button == 0) {
      mouseDown = true;
      lastMouseX = event.screenX;
      lastMouseY = event.screenY;
      document.addEventListener('mousemove', mouseMoveListener);
    }
    event.preventDefault();
  });
  document.addEventListener('mouseup', function(event) {
    if (mouseDown && event.button == 0) {
      mouseDown = false;
      document.removeEventListener('mousemove', mouseMoveListener);
    }
  });

  var uiContainer = div();
  
  var groupTarget = div();
  var boneControl = div();

  uiContainer.appendChild(div('button-group-container', groupTarget));
  uiContainer.appendChild(div('button-group-container', boneControl));

  // task.toggleShading('lambertian');

  new ButtonGroup(boneControl, ["Hide Bones", "Show Bones"], function(idx) {
    task.toggleBones();
  })

  new ButtonGroup(groupTarget, ["Lambertian", "Normals", "Vertex Mesh"], function(idx) {
    if (idx == 0) {
      task.toggleShading('lambertian');
    } else if (idx == 1) {
      task.toggleShading('normals');
    } else if (idx == 2) {
      task.toggleShading('mesh');
    }
  });

  document.getElementById('uiBox').appendChild(uiContainer);

  renderLoop = function() {
    task.render(gl, renderWidth, renderHeight);
    setTimeout(() => window.requestAnimationFrame(renderLoop), 1000/60)
  }

  window.requestAnimationFrame(renderLoop);

  hands.onResults((results) => {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      positions = results.multiHandLandmarks[0];
      // update skeleton
      task.updatePose(positions);
    } else {
      positions = [];
    }
  });

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 480,
    height: 360
  });

  camera.start();
}

// entrypoint
function initialize(canvasId) {
  setupTask(canvasId, HandRenderer);
}

// ref initialize to keep in bundle
console.log(initialize);
