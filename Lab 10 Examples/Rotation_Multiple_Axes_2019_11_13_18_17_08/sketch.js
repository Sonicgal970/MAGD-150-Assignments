let theta; 


function setup() {
  createCanvas(400,400, WEBGL);
  background(100);
  rectMode(CENTER);
  fill(51);
  stroke(255);
  theta = PI/8;
}

function draw(){
  background(100);
  rotateX(theta);
  rotateY(theta);
  rotateZ(theta);
  rect(0,0,100,100);
  theta += PI/64;
}