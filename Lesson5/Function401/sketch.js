var ball = {
  x: 300,
  y: 200,
  diameter: 24,
  display: function(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    
  },
  move: function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    
  }
  
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  ball.move();
  ball.display();
  
}
