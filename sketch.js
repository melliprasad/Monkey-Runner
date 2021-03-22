var monkey , monkey_running;
var banana ,bananaImage, stone, obstacleImage;
var bananaGroup, stoneGroup, ground;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  ground = createSprite(400, 350, 900, 10);
  ground.x = ground.width/2;
  ground.velocityX = -5;
  
  monkey = createSprite(70, 315, 20, 20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = createGroup();
  monkeyGroup = createGroup();
  
}

function draw() {
  background("white");
  
  score = score + Math.round(getFrameRate()/60);
  
  stroke("black");
  fill("black");
  textSize(15);
  text("Survival Time:"+score, 220, 40);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>= 200){
    monkey.velocityY = -12;
  } 
  monkey.velocityY = monkey.velocityY + 0.7;
  monkey.collide(ground);
  
  bananaGr();
  stoneGr();
  drawSprites();
}

function bananaGr(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400, 120, 20, 20);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -4;
    banana.lifetime = 100;
    //banana group
    bananaGroup.add(banana);
  }
}

function stoneGr(){
  if(frameCount % 300 === 0){
    var stone = createSprite(400, 310, 30, 30);
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.velocityX = -4;
    stone.lifetime = 100;
  }
}