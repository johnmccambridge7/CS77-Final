import { defaultArg } from './uiUtil';
import { Vector } from './vector';
import { Matrix } from './matrix';
import { armNormals } from './arm';


export var SolidVertexSource = `
  uniform mat4 ModelViewProjection;

  uniform mat4 ModelMatrix;
  uniform mat4 NormalMatrix;

  attribute vec3 Position;
  attribute vec3 Normal;
  
  varying vec3 Color;
  varying vec4 ModelLightPosition;
  varying vec3 norm;

  const vec3 LightPosition = vec3(0, -4, 2);
  const vec3 LightIntensity = vec3(20.0);
  const vec3 ka = 0.3*vec3(0.878431373,0.674509804,0.411764706);
  const vec3 kd = 0.7*vec3(0.878431373,0.674509804,0.411764706);

  void main() {
    gl_Position = ModelViewProjection * vec4(Position, 1.0);
    norm = normalize(mat3(NormalMatrix) * Normal);

    vec4 transformedPosition = ModelMatrix * vec4(Position, 1.0);
    vec3 lightDirection = normalize(LightPosition - transformedPosition.xyz);
    highp float distanceSquared = distance(transformedPosition.xyz, LightPosition)*distance(transformedPosition.xyz, LightPosition);
    vec3 lightDropoff = vec3(LightIntensity/(distanceSquared));

    float diff = max(dot(norm, lightDirection), 0.0);
    vec3 diffuse = diff * kd * lightDropoff;

    Color = diffuse + ka;
  }
`;

export var SolidNormalVertexSource = `
  uniform mat4 ModelViewProjection;

  uniform mat4 ModelMatrix;
  uniform mat4 NormalMatrix;

  attribute vec3 Position;
  attribute vec3 Normal;
  
  varying vec3 Color;
  varying vec4 ModelLightPosition;
  varying vec3 norm;

  void main() {
    gl_Position = ModelViewProjection * vec4(Position, 1.0);
    norm = normalize(mat3(NormalMatrix) * Normal);

    Color = norm;
  }
`;

export var SolidMeshVertexSource = `
  uniform mat4 ModelViewProjection;
  attribute vec3 Position;
  void main() {
    gl_Position = ModelViewProjection*vec4(Position, 1.0);
  }
`;

export var SolidMeshFragmentSource = `
  precision highp float;
  uniform vec4 Color;
  void main() {
    gl_FragColor = Color;
  }
`;

export var SolidFragmentSource = `
  precision highp float;

  varying vec3 Color;

  void main() {
    gl_FragColor = vec4(Color, 1.0);
  }
`;

export var WeightVertexSource = `
  uniform mat4 ModelViewProjection;

  attribute vec3 Position;
	attribute float Weight;

	varying float vWeight;
  
  void main() {
    gl_Position = ModelViewProjection*vec4(Position, 1.0);
    vWeight = Weight;
  }
`;

export var WeightFragmentSource = `
  precision highp float;

  uniform float EdgeWeight;
  uniform vec4 Color;

	varying float vWeight;
    void main() {
		gl_FragColor = mix(mix(vec4(1.0, 0.0, 0.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0), vWeight), Color, EdgeWeight*0.5);
  }
`;

export function createVertexBuffer(gl, vertexData) {
  var vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
  return vbo;
}

export function createIndexBuffer(gl, indexData) {
  var ibo = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);
  return ibo;
}

export function createColorBuffer(gl, colorData) {
	var cbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cbo);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);
	return cbo;
}

export function createShaderObject(gl, shaderSource, shaderType) {
  var shaderObject = gl.createShader(shaderType);
  gl.shaderSource(shaderObject, shaderSource);
  gl.compileShader(shaderObject);

  if (!gl.getShaderParameter(shaderObject, gl.COMPILE_STATUS)) {
    var lines = shaderSource.split("\n");
    for (var i = 0; i < lines.length; ++i)
      lines[i] = ("   " + (i + 1)).slice(-4) + " | " + lines[i];
    shaderSource = lines.join("\n");

    throw new Error(
        (shaderType == gl.FRAGMENT_SHADER ? "Fragment" : "Vertex") + " shader compilation error for shader '" + name + "':\n\n    " +
        gl.getShaderInfoLog(shaderObject).split("\n").join("\n    ") +
        "\nThe shader source code was:\n\n" +
        shaderSource);
  }
  return shaderObject;
}

export function createShaderProgram(gl, vertexSource, fragmentSource) {
  var vertexShader = createShaderObject(gl, vertexSource, gl.VERTEX_SHADER);
  var fragmentShader = createShaderObject(gl, fragmentSource, gl.FRAGMENT_SHADER);
  var program = gl.createProgram();
  gl.attachShader(program,   vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}

export class TriangleMesh {
  constructor(gl, vertexPositions, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor) {
    this.drawFaces = defaultArg(drawFaces, true);
    this.drawEdges = defaultArg(drawEdges, true);
    this.faceColor = defaultArg(faceColor, new Vector(1, 1, 1));
    this.edgeColor = defaultArg(edgeColor, new Vector(0.0, 0.0, 1.0));
    this.normalVbo = createVertexBuffer(gl, armNormals);

    this.positionVbo = createVertexBuffer(gl, vertexPositions);
    if (this.drawFaces) {
      this.indexCount = indices.length;
      this.indexIbo = createIndexBuffer(gl, indices);
    }
    if (this.drawEdges) {
      var edgeIndices = [];
      for (var i = 0; i < indices.length; i += 3) {
        edgeIndices.push(indices[i + 0], indices[i + 1]);
        edgeIndices.push(indices[i + 1], indices[i + 2]);
        edgeIndices.push(indices[i + 2], indices[i + 0]);
      }
      this.edgeIndexCount = edgeIndices.length;
      this.edgeIndexIbo = createIndexBuffer(gl, edgeIndices);
    }
    this.shaderProgram = shaderProgram;
  }

  render(gl, model, view, projection) {
    var modelViewProjection = projection.multiply(view).multiply(model);

    gl.useProgram(this.shaderProgram);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelMatrix"), false, model.transpose().m); 
    gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "NormalMatrix"), false, model.inverse().transpose().transpose().m); 


    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionVbo);

    var positionAttrib = gl.getAttribLocation(this.shaderProgram, "Position");
    gl.enableVertexAttribArray(positionAttrib);
    gl.vertexAttribPointer(positionAttrib, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.normalVbo);
    var normalAttrib = gl.getAttribLocation(this.shaderProgram, "Normal");
    if (normalAttrib >= 0) {
        gl.enableVertexAttribArray(normalAttrib);
        gl.vertexAttribPointer(normalAttrib, 3, gl.FLOAT, false, 0, 0);
    }

    if (this.drawFaces) {
      gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);
      gl.uniform1f(gl.getUniformLocation(this.shaderProgram, "EdgeWeight"), 0);
      gl.uniform4f(gl.getUniformLocation(this.shaderProgram, "Color"), this.faceColor.x, this.faceColor.y, this.faceColor.z, 1);
      // gl.uniform3f(gl.getAttribLocation(this.shaderProgram, "Position"), positionAttrib);


      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexIbo);
      gl.drawElements(gl.TRIANGLES, this.indexCount, gl.UNSIGNED_SHORT, 0);
    }

    if (this.drawEdges) {
      gl.lineWidth(2.0);

      modelViewProjection = Matrix.translate(0, 0, -1e-4).multiply(modelViewProjection);
      gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);
      gl.uniform1f(gl.getUniformLocation(this.shaderProgram, "EdgeWeight"), 1);
      gl.uniform4f(gl.getUniformLocation(this.shaderProgram, "Color"), this.edgeColor.x, this.edgeColor.y, this.edgeColor.z, 1);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.edgeIndexIbo);
      gl.drawElements(gl.LINES, this.edgeIndexCount, gl.UNSIGNED_SHORT, 0);
    }
  }
}


// WeightMesh - used to show the weights of the mesh
export class WeightShadedTriangleMesh {
  constructor(gl, vertexPositions, weights, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor) {
    this.triangleMesh = new TriangleMesh(gl, vertexPositions, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor);
    this.weightsVbo = createVertexBuffer(gl, weights);
    this.shaderProgram = shaderProgram;
  }

  render(gl, model, view, projection) {
    gl.useProgram(this.shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.weightsVbo);
    var weightAttrib = gl.getAttribLocation(this.shaderProgram, "Weight");
    gl.enableVertexAttribArray(weightAttrib);
    gl.vertexAttribPointer(weightAttrib, 1, gl.FLOAT, false, 0, 0);

    this.triangleMesh.render(gl, model, view, projection);
  }
}
