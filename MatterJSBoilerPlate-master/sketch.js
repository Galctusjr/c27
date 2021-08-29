const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var stone;
var rubber;
var ground;

function setup() {
	createCanvas(600, 400);
    background("black")

	engine = Engine.create();
	world = engine.world;

	hammer=new Hammer(50,50,100,20)
	stone=new Stone(450,200,75,75)
    rubber=new Rubber(150,200,75,75)
	ground=new Ground(300,height,800,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  fill("yellow")
  hammer.display();
  fill("grey")
  stone.display();
  fill("white")
  rubber.display();
  

  drawSprites();
 
}



