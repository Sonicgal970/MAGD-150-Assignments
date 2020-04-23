function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#732285');
	fill(80, 2, 95);
  stroke('#FB0DFF');
	ellipse(460, 100, 55, 55);
	colorMode(HSB);
	fill(110, 89, 55, 89);
  stroke('#0CE830');
	triangle(35, 40, 78, 60, 67, 109);
	colorMode(RGB, 255);
	fill(255, 75, 20);
  stroke('#FF9100');
	quad(9, 65, 44, 12, 35, 9, 17, 6);
	fill('#FF72E7');
  strokeWeight(2);
  stroke('#F4FF00');
  beginShape();
  vertex(200, 50);
  vertex(250, 50);
  vertex(250, 120)
  vertex(200, 120);
	beginContour();
  vertex(200, 70);
  vertex(240, 80);
  vertex(220, 110);
  vertex(210, 90);
  vertex(205, 75);
  endContour();
  endShape(CLOSE);
  fill('#EBC700');
  strokeWeight(1);
  stroke('#FF4F00');
  arc(250, 250, 90, 90, 0, PI + QUARTER_PI, PIE);
  fill('#00EB93');
  stroke('#00FFF4');
  triangle(60, 200, 140, 230, 65, 265);
  fill('#00FFF4');
  stroke('#00EB93');
  triangle(130, 200, 60, 230, 135, 265);
  fill('#FF0D48');
  rect(320, 400, 20, 60);
  fill('#2DEB17');
  triangle(320, 400, 340, 400, 330, 360);
  fill('#1AB9FF');
  stroke('#E8D7CC');
  ellipse(330, 410, 15, 15);
  fill('#E83B10');
  triangle(320, 430, 320, 460, 300, 460);
  triangle(340, 430, 340, 460, 360, 460);
}
