let wordnikAPI = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=e6fed479f2d635809400001c68301555f2b88a73e00ff1bb3';
let giphyAPI = 'http://api.giphy.com/v1/gifs/search?q=';
let gKey = '&api_key=dc6zaTOxFJmzC';

function setup() {
	noCanvas();
	wordGif()	
		.then(results => {
			createP(results.word);
			createImg(results.img);
		})
		.catch(err => console.error(err));

}


async function wordGif(){
	let response = await fetch(wordnikAPI);
	let json = await response.json();
	let response2 = await fetch(giphyAPI + json.word + gKey);
	let json2 = await response2.json();
	let img_url = json2.data[0].images['original'].url;

	return{
		word: json.word,
		img : img_url
	};
}
