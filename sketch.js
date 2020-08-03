var movingRectangle, fixedRectangle

function setup() {
  createCanvas(1200,800);
  movingRectangle = createSprite(400, 800, 80, 30);
  fixedRectangle = createSprite(400, 100, 50, 80);
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";
  movingRectangle.velocityY = -5;
  fixedRectangle.velocityY = +5;

  gameObj1 = createSprite(800, 800, 80, 30);
  gameObj2 = createSprite(800, 100, 50, 80);
  gameObj2.shapeColor = "green";
  gameObj1.shapeColor = "green";
  gameObj1.velocityY = -5;
  gameObj2.velocityY = +5;
}


function draw() {
  background(0);

 bounceOff(movingRectangle,fixedRectangle) 
 bounceOff(gameObj1,gameObj2)
  
  drawSprites();
  }

  