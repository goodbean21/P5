let totalNum = 20, rng = 1, minSize = 10, maxSize = 80;
let bubbles = [];

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

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++){
  	let overlap = false;
  	bubbles[i].move();
  	bubbles[i].display();

  	for(let j = i + 1; j < bubbles.length; j++){
  		if(bubbles[i].intersects(bubbles[j]) 
        && (bubbles[i].brightness == 0 || bubbles[j].brightness == 0)){
  			bubbles[i].changeColor(255);
  			bubbles[j].changeColor(255);

  		}
    }
  }
  
  /*
  }
  for(b of bubbles){
  	let overlap = false;
  	b.move();
  	b.display();

  	for(other of bubbles){
  		if(b !== other && b.intersects(other)){
  			overlap = true;
  		}
  	}
    if(overlap) b.changeColor(255);
    else b.changeColor(0);
  }
  	*/

}

class Bubble{
  constructor(x = 200, y = 200, diameter = 50){
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

  intersects(otherBubble){
  	let d = dist(this.x, this.y, otherBubble.x, otherBubble.y);
  	return (d <= (this.diameter/2.0) + (otherBubble.diameter/2.0));

  }

}