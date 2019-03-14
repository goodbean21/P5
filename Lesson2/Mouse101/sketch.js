function setup() {
  createCanvas(600,400);
  background(250, 250, 100);
  
}

function draw() {
  
  noStroke();

  fill(250, 200, 200, 30);
  ellipse(mouseX, mouseY, 20, 20);
  
  //fill(200, 250, 200);
  //rect(400, 100, 50, 50);
  
}

// Events that erase
function mousePressed(){
  background(250, 250, 100);
  
}
