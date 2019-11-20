function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#E72AEB');
	fill(255, 255, 25);
	ellipse(460, 20, 55, 55);
	colorMode(HSB);
	fill(110, 89, 55, 89);
	triangle(35, 60, 78, 80, 67, 99);
	colorMode(RGB);
	fill(255, 75, 20);
	quad(49, 65, 54, 12, 45, 9, 27, 6);
	fill('#99FFCA');
	arc(255, 255, 80, 80, 0, PI + QUARTER_PI, PIE);
}