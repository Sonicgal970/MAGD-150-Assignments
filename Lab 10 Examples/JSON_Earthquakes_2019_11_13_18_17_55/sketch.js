let earthquakes;
let x;
function preload() {
  // Get the most recent earthquake in the database
  let url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
  }

function setup() {
  noLoop();
  x=0;
  }

function draw() {
  background(200);
      
  // Get the magnitude and name of the earthquake out of the loaded JSON
  if (x<0){
    x=0;
  }
  let earthquakeMag = earthquakes.features[x].properties.mag;
  let earthquakeName = earthquakes.features[x].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);

}
  
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    x=x+1; 
    print(x);
  } else if(keyCode === LEFT_ARROW){
    x--;
  }
  loop();
}
    