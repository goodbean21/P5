let particles;


function setup() {
	createCanvas(600, 400);
	particles = new Array(100).fill().map( p => new Particle());

}

function draw(){
	background(0);
	
	for(let i = 0; i < 5; i++){
		let p = new Particle();
		particles.push(p);
	}

	for(let particle of particles){
		particle.update();
		particle.show();
		particles = particles.filter(p => !p.finish());
	}

	let sumx = particles.reduce((x, p) => x + p.x , 0);
	let sumy = particles.reduce((y, p) => y + p.y , 0);

	let cX = sumx/particles.length;
	let cY = sumy/particles.length;

	stroke(255,0,0);
	strokeWeight(4)
	point(cX,cY);

}

class Particle {
	constructor(){
		this.x = 300;
		this.y = 380;
		this.vx = random(-1,1);
		this.vy = random(-5,-1);
		this.alpha = 255;
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.alpha -= 3;
	}

	finish(){
		return this.alpha <= 0;
	}

	show(){
		noStroke();
		fill(255,this.alpha);
		ellipse(this.x, this.y, 16);

	}

}