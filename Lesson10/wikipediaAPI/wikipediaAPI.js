let userInput, term, url;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&titles='

function setup() {
  noCanvas();
  userInput = select('#userinput');
  userInput.changed(goWiki);
  goWiki(userinput.value());
  
}

function goWiki(term){
	term = userInput.value();
	url = searchUrl + term;
	loadJSON(url, gotData,'jsonp');
	//console.log(url);

}

function gotData(data){
	let l = data.length;
	let index = floor(random(0, l));
	var title = data[1][index];
	title = title.replace(/\s+/g,'_');
	let url_content = contentUrl + title;
	loadJSON(url_content, gotContent, 'jsonp');
	console.log(title);
}

function gotContent(data){
	let anchor = data.query.pages;
	let pageId = Object.keys(anchor)[0];

	let content = anchor[pageId].revisions[0]['*'];

	let wordRegex = /\b\w{4,}\b/g;
	var words =	content.match(wordRegex);

	var word = random(words);

	goWiki(word);
}
