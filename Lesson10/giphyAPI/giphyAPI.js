var url1 = 'http://api.giphy.com/v1/gifs/search?q=';
var word = 'Rain';
//var api = '&api_key=tg72txj0ayQzKlryUsunKPit1TyEaozx';
var api = '&api_key=dc6zaTOxFJmzC';

var input, btn, img = [];

function setup() {
  input = createInput('Rain');
  btn = createButton('Show');
  btn.mousePressed(searchGif);
  createP('');
  
  noCanvas();
  
}

function searchGif(){
  if(img){
    for(var i = 0 ; i < img.length; i++){
      img[i].remove();
    }
  }
  word = input.value();
  var url = url1 + word + api;
  loadJSON(url, gotData);
  
}


function gotData(giphy){
  var gif = giphy.data
  for(var i = 0; i < gif.length; i++){
    img[i] = createImg(gif[i].images.original.url);
  }
}

function draw() {
  
}
