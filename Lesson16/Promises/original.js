let wordnikAPI = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=e6fed479f2d635809400001c68301555f2b88a73e00ff1bb3';
let giphyAPI = 'http://api.giphy.com/v1/gifs/search?q=';
let gKey = '&api_key=dc6zaTOxFJmzC';

function setup() {
	noCanvas();
	loadJSON(wordnikAPI, function(data){
		createP(data.word);
		
		loadJSON(giphyAPI + data.word + gKey, function(data){
			console.log(data.data[0].images);
			createImg(data.data[0].images['original'].url);
		});
		
	});

}