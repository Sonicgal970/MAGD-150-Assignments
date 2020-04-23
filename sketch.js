let fishes = []; //creates the array of multiple fish


function setup() {
  createCanvas(600, 500);
  for(let j = 0; j <= 20; j++){
    fishes.push(new fish());
  }
}

function draw() {
  background('#271CFF');
  stroke('#3FFFF9');
  bezier(0, 200, 200, 150, 400, 300, 600, 200);
  fill('#EBD800');
  stroke('#EBD800');
  rect(0, 400, width, 100);
  stroke('#EBBD27');
  strokeWeight(8);
  point(100, 420);
  point(50, 430);
  point(200, 480);
  point(150, 410);
  point(10, 402);
  point(300, 450);
  point(250, 440);
  point(500, 401);
  point(450, 440);
  for(let j = 0; j < fishes.length; j++){
        fishes[j].display();
  fishes[j].move();
  }
}

class fish {

constructor(){                 //the main constructor for the fish class
var pX, pY, pZ, y1, y2, y3,rColor;

this.pX = round(random(0, 165));
this.pY = round(random(0, 375));
this.pZ = random(0, 40);
this.y1= round(random(0, 400));
this.y2 = round(random(0, 400));
this.y3 = round(random(0, 400));
this.rColor = color(random(255), random(255), random(255));
}

  display(){ //displays the fish in the water
fill(this.rColor);
triangle(this.pX, this.y1,this.pY, this.y2,this.pZ, this.y3);
}
  
move(){ //allows the fish to move in the water
this.pX += random(-5,5);
this.pY += random(-5,5);
this.pZ += random(-5,5);
}
}


