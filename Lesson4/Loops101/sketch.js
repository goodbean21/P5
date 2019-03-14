// var x = 0; // Global Variable

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  var x = 0; // Local Variable
  
  background(0);
  strokeWeight(4);
  stroke(255);
  
 fill(0, 200, 100);
  while(x <= width){
    ellipse(x, 100, 25, 25); 
    x += 50;
   
 }
 
 fill(0, 0, 200);
 for(var x= 0; x <= width; x += 50) ellipse(x, 300, 25, 25);
 
}
