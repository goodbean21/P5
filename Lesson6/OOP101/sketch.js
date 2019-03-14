let bubble, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble = new Bubble(50, 60 , 48);
  bubble2 = new Bubble(300, 200, 40);

}

function draw() {
  background(0);
  bubble.move();
  bubble.display();

  bubble2.move();
  bubble2.display();

}

class Bubble{
	/*
  constructor() {
    this.x = 200;
    this.y = 150;
    this.diameter = 24;
    
  }
*/
  constructor(x, y, diameter){
  	this.x = x;
  	this.y = y;
  	this.diameter = diameter;

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