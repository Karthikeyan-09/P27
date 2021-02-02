const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1;

function setup() {
	createCanvas(1500, 700)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(750,200,500,20);
	bob1 = new Bob(650,450,25);
	bob2 = new Bob(700,450,25);
	bob3 = new Bob(750,450,25);
	bob4 = new Bob(800,450,25);
	bob5 = new Bob(850,450,25);	
	bobDiameter = 50;
	rope1 = new Rope(bob1.body,Roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("green");
  
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
 
}