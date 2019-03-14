
function setup() {
	noCanvas();
	delayES8(1000)
		.then(() => createP('Hello'))
		.catch(err => console.log(err));
}

function delay(time){
	return new Promise((resolve, reject) => {
		if(isNaN(time)) reject(new Error('Delay requieres a valid number'));
		else setTimeout(resolve, time);

	});

}

async function delayES8(time){
	await delay(time);

	return;
}
