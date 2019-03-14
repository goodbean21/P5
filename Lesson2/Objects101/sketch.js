var circle = {
  x : 0,
  y : 100,
  diameter : 50
  
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  
  fill(0, 100, 255);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  circle.x += 10;
  
  if(circle.x >= 600 + circle.diameter/2.0) circle.x = 0;
  
}