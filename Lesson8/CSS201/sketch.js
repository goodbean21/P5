let p, a, img, btn, numOfApples = 3;
let images = [];


function setup() {
	noCanvas();

	for(var i = 0; i < numOfApples; i++){
		p = createP('This is a link: ');
		p.style('background-color', '#CCC');
		p.style('padding', '12px');

		a = createA('#', 'apples');
		a.mousePressed(addPhoto);
		a.parent(p);

	}

	btn = select('#clear');
	btn.mousePressed(clearAll);

}

function clearAll(){
	images = selectAll('img');
	for (var i = 0; i < images.length; i++){
		images[i].remove();
	}
}

function addPhoto(){
	img = createImg('apple.jpg');
	img.size(100,100);
	img.parent(this.parent());

}