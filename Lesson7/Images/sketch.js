let bubbles = [], b;
let xOffset, yOffset, size, totalNum = 10;
var flower;

function preload(){
	flower = loadImage("pups.png");

}

function setup() {
  createCanvas(600, 400);
  preload();

  for(let i = 0; i < totalNum; i++){
  	xOffset = random(width);
  	yOffset = random(height);
  	size = random(10, 50);

  	bubbles.push(new Bubble(xOffset, yOffset, size))
  }

}

function mousePressed(){
	for(let bubble of bubbles){
		if(bubble.rollOver(mouseX, mouseY)){
			bubble.changeColor();
		}
	}

}

function draw() {
  background(0);

  for(let bubble of bubbles){
  	bubble.move();
  	bubble.display();

  }
}

class Bubble{
  constructor(x, y, diameter){
  	this.x = x;
  	this.y = y;
  	this.brightness = 0;
  	this.diameter = diameter;

  }
  move(){
  	this.x += random(-1, 1);
    this.y += random(-1, 1);
    
  }

  display(){
  	image(flower, this.x, this.y);
  	/*
  	stroke(255);
  	strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    */

  }

  changeColor(){
  	if(this.brightness == 0) this.brightness = 125;
  	else this.brightness = 0;
  }

  rollOver(x, y){
  	let d = dist(x, y, this.x, this.y);
  	return (d < this.diameter/2);

  }
}