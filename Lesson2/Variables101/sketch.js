var circleX = 50;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(150);
  
  fill(0, 100, 255);
  ellipse(circleX, 200, 50, 50);
  
  circleX += 10;
  
}