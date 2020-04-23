let x,y,z;

function setup() {
  createCanvas(400, 400, WEBGL);
  x=0;
  y=0;
  z=0;
}

function draw() {
  background(100);
  translate(x,y,z);
  rectMode(CENTER);
  rect(0,0,100,100);
  z++
  
  
}