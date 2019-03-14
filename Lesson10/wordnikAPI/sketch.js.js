var url1 = 'https://api.wordnik.com/v4/word.json/';
var word = 'hello';
var type = '/relatedWords?useCanonical=false';
var limit = '&limitPerRelationshipType=';
var numlimit = 10;
var api = '&api_key=e6fed479f2d635809400001c68301555f2b88a73e00ff1bb3';

var url = url1 + word + type + limit + numlimit.toString() + api;

var link;

function setup() {
	noCanvas();
	loadJSON(url, gotData);  
	link = createA('#', word);
}

function gotData(data){

}

function draw() {
  
}
