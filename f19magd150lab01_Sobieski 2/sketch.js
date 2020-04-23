function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
	rectMode(RADIUS);
	fill(125);
	rect(60, 30, 20, 120);
	rectMode(CENTER);
	noFill();
	rect(60, 60, 40, 40);
	line(45, 40, 45, 80);
	line(50, 40, 50, 80);
	line(55, 40, 55, 80);
	line(60, 40, 60, 80);
	line(65, 40, 65, 80);
	line(70, 40, 70, 80);
	line(75, 40, 75, 80);
	line(40, 45, 80, 45);
	line(40, 50, 80, 50);
	line(40, 55, 80, 55);
	line(40, 60, 80, 60);
	line(40, 65, 80, 65);
	line(40, 70, 80, 70);
	line(40, 75, 80, 75);
}