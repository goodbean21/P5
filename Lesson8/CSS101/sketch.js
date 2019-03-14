var bgColor, btn, txt, paragraph, group, button;

function setup() {
	createCanvas(200, 200);
	bgColor = color(51);
	background(bgColor);
	
	txt = createP("Some text");
	btn = createButton("Go!");
	btn.mousePressed(changeStyle);
	txt.mouseOver(revertStyle);

	paragraph = select('#other');
	button = select('#button');
	group = selectAll('.group');

	for(g of group){
		g.style('font-size', '12pt')
	}

	button.mousePressed(canvasBG);
	paragraph.mouseOver(changeBG);

}

function changeBG(){
	paragraph.style('background-color','#0AF');

}

function canvasBG(){
	background(random(255));

}

function changeStyle(){
	txt.style("background", "pink");
	txt.style("padding", "24px");
}

function revertStyle(){
	txt.style("background", "gray");
	txt.style("padding", "8px");
}

function draw() {
	fill(255, 0, 175);
	ellipse(100, 100, 50, 50);

}