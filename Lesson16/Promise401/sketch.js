let wordnikAPI = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=e6fed479f2d635809400001c68301555f2b88a73e00ff1bb3';
let giphyAPI = 'http://api.giphy.com/v1/gifs/search?q=';
let gKey = '&api_key=dc6zaTOxFJmzC';

let num = 4;

function setup() {
	noCanvas();
	let promises = [];
	for(let i = 0; i < num; i++)
		promises.push(wordGif());

	Promise.all(promises)
		.then((results) => {
			for(let i = 0; i < results.length; i++){
				createP(results[i].word);
				if(results[i] !== null)
					createImg(results[i].img);
			}

		})
		.catch(err => console.log(err));

	/*
	wordGif()	
		.then(results => {
			createP(results.word);
			createImg(results.img);
		})
		.catch(err => console.error(err));
	*/

}


async function wordGif(){

	let img_url = null;

	let response = await fetch(wordnikAPI);
	let json = await response.json();
	let response2 = await fetch(giphyAPI + json.word + gKey);
	let json2 = await response2.json();
	try{
		img_url = json2.data[0].images['original'].url;

	}catch(err){
		console.log("no image found for " + json.word);
		console.error(err);

	}

	return{
		word: json.word,
		img : img_url
	};
}
