const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var database;
var playerCount,gameState=0,player,game,form,allPlayers;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world; 
  database = firebase.database();

  game = new Game();

  game.start();
  game.getState();
}

function draw() {
  Engine.update(engine);
  background(255);
  if(playerCount > 4 && keyIsDown(UP_ARROW)){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }

}