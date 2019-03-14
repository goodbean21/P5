var nums = [100, 25, 12, 72];
var x = 100, y = 200;

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background(0);
	for(var i = 0; i < nums.length; i++){
		ellipse((i + 1) * 100, y, nums[i], nums[i]);

	}

}