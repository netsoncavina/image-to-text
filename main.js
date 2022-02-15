const density = "Ñ@#$9876543210?!abc;:+=-,._";
let mateo;
function preLoad() {
  mateo = loadImage("Mateo.png");
}
function setup() {
  createCanvas(400, 400);
  preLoad();
}

function draw() {
  background(220);
  image(mateo, 0, 0, width, height);

  for (let i = 0; i < mateo.width; i++) {
    for (let j = 0; j < mateo.height; j++) {
      const pixelIndex = (i + j * mateo.width) * 4;
      const r = mateo.pixels[pixelIndex + 0];
      const g = mateo.pixels[pixelIndex + 1];
      const b = mateo.pixels[pixelIndex + 2];
    }
  }
}
