
var btn;
var p;
var prob = 5000;
var started = false;

var entrants;

function setup() {
	noCanvas();
	entrants = select('#entrants');

	entrants.input(updateProbability);

	btn = select('#start');
	p = select('#result');
	btn.mousePressed(startLottery)
	noLoop();

}

function updateProbability(){
	prob = entrants.html() / 10;
	select('#chance').html(prob);
	var notwin = (prob - 1)/prob;
	var num = log(0.01)/log(notwin);

	select('#99percent').html(floor(num));

}

function startLottery(){
	started = true;
	total = 0;
	loop();

}

function draw(){

	if(started){
		var r = floor(random(prob));
		
		if (r == 1){
			p.html('won lottery');
			noLoop();
		}
		else p.html('Try again');
	}
	
	total++;

	select('#total').html(total);

}