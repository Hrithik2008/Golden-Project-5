const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var database;
var playerCount,gameState=0,player,game,form,allPlayers,objects=[],bullets = [];
var bg;

function preload(){
  bg = loadImage("images/bg.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world; 
  database = firebase.database();
  //world.gravity.y = 0;

  game = new Game();

  game.start();
  game.getState();

  //Bodies.rectangle(width/2,height,width,25,{isStatic : true});

}

function draw() {
  Engine.update(engine);
  //background(255);
  if(playerCount > 4 && keyIsDown(UP_ARROW)){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }

}

function detectCollision(bodyA,bodyB) {
  var posA = bodyA.body.position;
  var posB = bodyB.body.position;
  var distance = dist(posA.x,posA.y,posB.x,posB.y);
  if(distance <= bodyA.r + bodyB.r ){
    Matter.Body.setStatic(bodyB.body,false);
  }
}