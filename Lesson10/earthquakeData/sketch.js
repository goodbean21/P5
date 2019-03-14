var mapImag, x, y, cxy;

var clat = 0;
var clon = 0;
var tiles = 256;

var coord = [], aLat = [], aLon = [];

var zoom = 1, numErq = 800;

var earthquakes, parser, xml = [], Mag = [];

function preload(){
	mapImag = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiamF5azIxIiwiYSI6ImNqazU1MGVkcDBrbGwzd280Ynd6aGp4OHkifQ.w_fekg2iX_ERbS3cIApLSw');
	earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.atom');

}


function setup() {
	createCanvas(1024, 512);
	image(mapImag, 0, 0);
	imageMode(CENTER);
	translate(width/2, height/2);


	parser = new DOMParser();

	for(var i = 3; i < numErq; i++){
		xml[i - 3] = parser.parseFromString(earthquakes[i],"text/xml");
	}

	for(var i = 0; i < xml.length; i++){
		var strCoord = xml[i].getElementsByTagName("georss:point")[0].textContent
		var strMag = xml[i].getElementsByTagName("category")[1].attributes[1].nodeValue;
		coord[i] = split(strCoord, " ");
		Mag[i] = strMag.substring(10,11)
	}


	for(var i = 0; i < xml.length; i++){
		XY = merc(coord[i], Mag[i]);
		x = XY[0] - 512;
		y = XY[1] - 512;

		fill(255, 0, 255, 200);
		ellipse(x, y, XY[2], XY[2]);


	}


}

function merc(coord, mag){
	dLon = parseFloat(coord[0][0]);
	dLat = parseFloat(coord[0][1]);

	mag = parseInt(mag) * 2;

	lon = radians(dLon);
	lat = radians(dLat);

	var a = (tiles/PI)*pow(2,zoom);
	var b = lon + PI;

	mercX = a * b;

	c = (tiles/PI)*pow(2,zoom);
	d = tan(PI/4 + lat/2);
	var e = PI - log(d);

	mercY = e * c;

	return [mercX, mercY, mag];

}