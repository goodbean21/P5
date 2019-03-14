let bubble

function setup() {
  createCanvas(600, 400);
  bubble = new Bubble;	  
}

function draw() {
  background(0);
  //print(bubble.x, bubble.y);
 
}

class Bubble{
  constructor() {
    this.x = 200;
    this.y = 150;
    this.diameter = 24;
    
  }

  move(){
  	this.x += random(-1, 1);
    this.y += random(-1, 1);
    
  }

  display(){
  	stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);

  }
}