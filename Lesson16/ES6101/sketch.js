/* 
	var : is a function defined variable. The way it does it is via
	hoasting which adds the declaration of the variable at the top
	of de function. Making it function scope.

	let : is block defined variable. The scope is only in between
	{ }. Making it only available for certain parts of the code.

	const : Makes a variable constant; therefore, it containts 
	unvariable values. Which can containt anything, as much as
	objects or functions.
*/

const y = 20;

function setup(){

	for(var i = 0; i < 100; i++){
		let j = i; // cannot be access outside this loop.
	}

	var x = mouseX + 100;
	if(x > 50){
		y = 20;
		ellipse(x, y, 100, 100);

	}

}

function draw(){

}