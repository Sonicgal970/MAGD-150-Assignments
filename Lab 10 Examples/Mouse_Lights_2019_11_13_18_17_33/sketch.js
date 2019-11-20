var dirx, diry, dirz;


function setup() {
  createCanvas(710, 400, WEBGL);
  dirx = random(-.5, .5); 
  diry = random(-.5, .5);
  dirz = random(-.5, .5);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, dirx, diry, dirz);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(120, 64);
}

function mousePressed(){
  
  dirx = random(-.5, .5); 
  diry = random(-.5, .5);
  dirz = random(-.5, .5); 
  }