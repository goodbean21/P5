var weather, x, y, input;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=e69f2a9731ede0a935d528194f10d071';
var units = '&units=metric';

function setup() {
  createCanvas(200,200);
  var btn = select('#submit');
  btn.mousePressed(getWeather);
  input = select('#city');
  
  x = width/2;
  y = height/2;
  
}

function getWeather(){
  var url = api+input.value()+units+apiKey;
  loadJSON(url, gotData);
  
}

function gotData(data){
  weather = data;
  
}

function draw() {
  background(0);
  noStroke();
  if(weather){
    fill(200);
    ellipse(x, y, weather.main.humidity);
    fill(155);
    ellipse(x, y, weather.main.temp);
    
  }
}
