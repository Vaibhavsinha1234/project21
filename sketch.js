var bullet , wall;
var thickness
var speed , weight;

function setup() {
  createCanvas(1600,400);
  speed = random(233,321);
  weight = random(30,50);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = "white";
  thickness=random(22,83)
}

function draw() {
  background(0,0,0);

  edges = createEdgeSprites();
  
  if (hascolliedtoghter(bullet,wall)) {
    bullet.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (deformation>10) {
      wall.shapeColor = color(255,0,0);
    }

    if (deformation<10) {
      wall.shapeColor = color(0,255,0);
    }

    

  }
  
  drawSprites();
}

function hascolliedtoghter(bullet,wall){
  bulletrightedge=bullet.x+bullet.width
  wallleftedge=wall.x
  if (bulletrightedge>=wallleftedge){
    return true
  }
  else{
    return false
  }
}