var lineX = 0, speed = 5, time = 1000;
var url = 'http://api.open-notify.org/iss-now.json';
var issX = 0, issY = 0;

function setup() {
  createCanvas(600,400);
  setInterval(askISS, time);
  
}

function askISS(){
  loadJSON(url, gotData, 'jsonp');

}

function gotData(data){
  issX = map(data.iss_position.latitude, -90, 90, 0, width);
  issY = map(data.iss_position.longitude,-90, 90, 0, height);
  
}

function draw() {
  background(51);
  
  fill(255);
  ellipse(issX, issY, 24, 24);
  
  stroke(255);
  line(lineX, 0, lineX, height);
  lineX += speed;
  if(lineX > width) lineX = 0;
  
}
