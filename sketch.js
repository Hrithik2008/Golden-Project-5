const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var database;
var playerCount,gameState=0,player,game,form;

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
}
