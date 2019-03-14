function preload(){
  flower = loadJSON("flower.json");
  data = loadJSON("birds.json")

}

function setup() {
  var birds = data.birds;
  
  for(bird of birds){
    createElement('h1', bird.family);
    for(member of bird.members){
      createDiv(member);
    }
  }
  
  //var bird = data.birds[1].members[2];
  p = createP(flower.name);
  
}

function draw() {

}
