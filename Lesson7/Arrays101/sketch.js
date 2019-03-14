var nums = [100, 25, 12, 72];
var num = 23, index = 0;

var words = ["Rainbow", "Heart", "Purple", 
			"Friendship", "Love"];

function setup() {
  createCanvas(400, 400);

}

function draw() {
	background(0);
	/*
	ellipse(100, 200, num, num);
	ellipse(200, 200, nums[2], nums[2]);	
	*/
	
	fill(255);
	textSize(32);
	text(words[index], 12, 200);

}

function mousePressed(){
	index++;
	if(index == words.length) index = 0;

}