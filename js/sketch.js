var img;
var cursive;
var i = 0;
var meat;

function preload(){
  img = loadImage("img/breakfast.png");
  meat = loadImage("img/meat.jpg");
  cursive = loadFont("fonts/de.ttf");
}

function setup(){
  createCanvas(640, 580);
}

function draw(){
  // background(255);
  fill(random(0,255), random(0,255), 0);
  textSize(i);
  textFont("Yellowtail");
  if(mouseIsPressed) {
    text("hungrryryryryryrr",mouseY,height/2);
  }

  if(keyIsPressed) {
    text(key, random(width), random(height)); // Display last key pressed.
  } else {
    background(255, 255, 255, 10);
    image(meat, random(width), random (height),random(width), random (height) );
  }

  image(img, i, 0, mouseX, mouseY);
  i = i + 1;
}
