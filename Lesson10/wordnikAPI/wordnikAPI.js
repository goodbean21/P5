var url1 = 'https://api.wordnik.com/v4/word.json/';
var word = 'hello';
var type = '/relatedWords?useCanonical=false';
var limit = '&limitPerRelationshipType=';
var numlimit = 10;
var api = '&api_key=e6fed479f2d635809400001c68301555f2b88a73e00ff1bb3';

var link, url;

function setup() {
	noCanvas();
	link = createA('#', word);
  link.mousePressed(askWordnik);
}

function gotData(data){
  var dataInd = floor(random(0, data.length));
  var wordsInd = floor(random(0,data[dataInd].words.length));
  word = data[dataInd].words[wordsInd];
  link.html(word);
  
}

function askWordnik(){
  url = url1 + word + type + limit + numlimit.toString() + api;
  loadJSON(url, gotData);  

}
