var car 
var speed
var wall 
var weight



function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(60,200,50,50);
  car.velocityX = speed;
  car.shapeColor= "blue";
  wall = createSprite(1500,200,60,height);
  wall.shapeColor= "grey";

}

function draw() {
  background("black");  
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deform = 0.5*weight*speed*speed/22500;
    if(deform>180){
      car.shapeColor="red";
    }
    if(deform<180&&deform>100){
      car.shapeColor="yellow";
    }
    if(deform<100){
      car.shapeColor="green";
    }
  }
}