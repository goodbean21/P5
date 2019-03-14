let bubbles = [];
let bubble, xOffset, yOffset, size;
let totalNum = 20, rng = 1, minSize = 10, maxSize = 80;
let x = 100, y = 100, diameter = 24;

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < totalNum; i++){
	  xOffset = random(width);
	  yOffset = random(height);
	  size = random(minSize, maxSize);

	  bubble = new Bubble(xOffset, yOffset, size);
	  bubbles.push(bubble);
	}
}

function mouseMoved(){
	for(b of bubbles){
		if(b.rollOver(mouseX, mouseY)) b.changeColor(255);
		else b.changeColor(0);
	}
}

function mousePressed(){
	for(let i = bubbles.length - 1; i >= 0 ; i--){
		if(bubbles[i].rollOver(mouseX, mouseY))
			bubbles.splice(i, 1);
	}
}

function draw() {
  background(0);
  for(b of bubbles){
  	b.move();
  	b.display();

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
  	this.x += random(-rng, rng);
    this.y += random(-rng, rng);
    
  }

  display(){
  	stroke(255);
  	strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.diameter, this.diameter);

  }

  changeColor(bright){
  	this.brightness = bright;

  }

  rollOver(x, y){
  	let d = dist(x, y, this.x, this.y);
  	return (d < this.diameter/2.0);

  }

}