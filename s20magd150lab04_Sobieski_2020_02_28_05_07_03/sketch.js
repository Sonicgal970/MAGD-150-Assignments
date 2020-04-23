 var x = 0;
var y = 0;
var t = 30;
function setup(){
createCanvas(500, 500);

mouseX = pmouseX;
mouseY = pmouseY;
}

function draw(){
    background('#EB4A2F');
    fill('#FFC36B');
    ellipse(250, 250, 220, 220);
  fill('#FF281C');
  ellipse(250, 250, 205, 205);
    fill('#FFD528');
    ellipse(250, 250, 190, 190);
  line(250, 140, 250, 360);
  line(140, 250, 360, 250);
  line(175, 168, 325, 329);
  line(175, 329, 325, 168);
  
  if(x == 1){
            fill('#A8132A');
        ellipse(200, 200, 25, 25);
  }else if(x >= 2){
    fill('#A8132A');
    ellipse(300, 300, 25, 25);
    ellipse(200, 200, 25, 25);
    
    if(y == 1){
fill('#D15000');
      triangle(200, 270, 200, 290, 220, 280);
    } else if(y >= 2){
      fill('#D15000');
      triangle(300, 220, 300, 240, 280, 230);
      triangle(200, 270, 200, 290, 220, 280);
    }
  }


  if((keyIsPressed == true) && (key == 'P')){
    fill('#A9B3DE');
      rect(140, 140, 250, 250);
    fill('#E86141');
    ellipse(265, 265, 150, 150);
    fill('#FFF30F');
    triangle(255, 325, 215, 245, 290, 245);
    fill('#EBBC4B');
    rect(215, 240, 75, 20);
    fill('#FF6446');
    ellipse(265, 270, 20, 20);
    ellipse(245, 280, 20, 20);
    ellipse(255, 300, 20, 20);
    fill(0);
    textSize(30);
    text("Free Pizza", 190, 175);
  }
  
  for(var s = 0; s < 100; s++){
    fill('#FFEF78');
    textSize(20);
    text("Enjoy your pizza", t, 400);
  }
  t++;
}

function mousePressed(){
  if(mouseButton == LEFT){
x += 1;
  } else if(mouseButton == RIGHT){
    x -=1;
  }
}

function keyPressed(){
  if(key == 'a'){
    y += 1;
  }else if(key == 'm'){
    y -= 1;
  }
}
