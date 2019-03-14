let bubbles = [];
let xOffset, yOffset, size, totalNum = 10;

function setup() {
  createCanvas(600, 400);
  /*
  for(let i = 0; i < totalNum; i++) {
  	xOffset = random(width);
  	yOffset = random(height);
  	size = random(10, 40);
  	bubbles[i] = new Bubble(xOffset, yOffset, size);

  }
  */
}

function mousePressed(){
	let r = random(10, 50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);

}

function draw() {
  background(0);

  for(let bubble of bubbles){
  	bubble.move();
  	bubble.display();

  }
  /*
  for(let i = 0; i < bubbles.length; i++) {
  	bubbles[i].move();
  	bubbles[i].display();

  }
  */
}

class Bubble{
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
  	noStroke();
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);

  }
}