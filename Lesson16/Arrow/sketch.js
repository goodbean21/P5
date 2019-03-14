let Counter1;

function setup(){
	createCanvas(600, 400);
	background(0);
	let button = createButton('press');

	button.mousePressed(() => background(random(255)));

	Counter1 = new Counter(100, 500);

}

class Counter {
	constructor(start, time){
		this.count = start;
		this.p = createP('');

		setInterval(() => {
			this.count++;
			this.p.html(this.count);
		},time);

	}

}