var ball = {
  x: 300,
  y : 200,
  xSpeed : 4,
  ySpeed : -3,
  diameter : 24
  
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  display();
  move();
  bounce();

}

function move(){
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  
}

function bounce(){
  if(ball.x > width || ball.x < 0) ball.xSpeed = -ball.xSpeed;
  if(ball.y > height || ball.y < 0) ball.ySpeed = -ball.ySpeed;
   
}

function display(){
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  
}