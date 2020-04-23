let crystal;
let rainbowC;
let cSound;
let lGlow;
let reverb;

function preload(){
  crystal = loadImage('crystalcaverns.jpg');
  rainbowC = loadImage('rainbow-crystal-1.jpg');
  lGlow = createVideo(['lightglow.mp4']);
  lGlow.hide(); // hides video from playing outside of the Canvas
  soundFormats('wav', 'mp3');
  cSound = loadSound('crystalmusic.wav'); 
}

function setup() {
  createCanvas(400, 400);
 reverb = new p5.Reverb();
  cSound.disconnect();
  reverb.process(cSound, 2,2);
}

function draw() {
  background(220);
  image(crystal,0,0);
  crystal.resize(400,400);
  image(rainbowC,100,250);
  rainbowC.resize(150, 100);
  image(lGlow, 130, 180, 80,80); //displays the lGlow video
  let ripple = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  reverb.drywet(ripple);
}

function mousePressed(){
  
  lGlow.loop();
  playSound();
}

function playSound(){
  cSound.play(); //plays the crystal music sound effect.
}