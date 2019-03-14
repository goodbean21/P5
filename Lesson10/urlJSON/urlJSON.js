var x = 0;
var spaceData;

function setup() {
  createCanvas(200,200);
  loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");
 
 }

function gotData(data){
  background(0);
  spaceData = data;

}

function draw() {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x++;
  
  if(x > width) x = 0;
  
  if(spaceData){
    randomSeed(10);
    for(var i = 0; i < spaceData.number; i++){
      fill(255);
      posx = random(width);
      posy = random(height);
      ellipse(posx, posy, 16, 16);
      fill(175);
      noStroke();
      text(spaceData.people[i].name,posx - spaceData.people[i].name.length/2, posy);
    }
  }
}
