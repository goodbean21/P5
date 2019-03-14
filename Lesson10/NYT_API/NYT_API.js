var url1 = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='
var word = 'Hello';
var api = '&api-key=8bf5b02988ec40f5bb008086b34b7b7a';
var url, articles, element = [], p = [], A = [];

function setup() {
  noCanvas();
  input = createInput('Hello');
  
  btn = createButton('submit');
  btn.mousePressed(askNYT);
  

}
function askNYT(){
  word = input.value();
  if(element){
    for(var i = 0; i < element.length; i++){
      element[i].remove()
      p[i].remove();
      A[i].remove();
    }
  }
    
  url = url1 + word + api;
  loadJSON(url, gotData);
  
}

function openURL(page){
  window.open(page);
}

function gotData(data){
  articles = data.response.docs;
  for(var i = 0; i < articles.length; i++){
    element[i] = createElement('h2',articles[i].headline.main);
    p[i] = createP(articles[i].snippet);
    A[i] = createA('#', articles[i].web_url);
  }
}
