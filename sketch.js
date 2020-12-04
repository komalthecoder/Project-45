const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Joker;
var HarleyQuinn;
var DeadShot;
var SpiderMan;
var Thanos;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19
var wall20;

function preload(){
  
}

function setup(){
createCanvas(1500,750);
  
engine = Engine.create();
world = engine.world;

wall1 = new Wall(640,320,10,130);
wall2 = new Wall(710,379,130,10);
wall3 = new Wall(770,320,10,130);
wall4 = new Wall(705,260,140,10);
wall5 = new Wall(590,378,90,10);
wall6 = new Wall(574,330,140,10);
wall7 = new Wall(540,435,10,130);
wall8 = new Wall(500,390,10,130);
wall9 = new Wall(430,450,130,10);
wall10 = new Wall(470,495,130,10);
wall11 = new Wall(360,510,10,130);
wall12 = new Wall(410,555,10,130);
wall13 = new Wall(290,568,130,10);
wall14 = new Wall(340,615,130,10);
wall15 = new Wall(220,613,10,100);
wall16 = new Wall(280,660,10,100);
wall17 = new Wall(205,705,160,10);
wall18 = new Wall(145,657,160,10);
wall19 = new Wall(130,725,10,50);
wall20 = new Wall(60,700,10,100);

Joker = createSprite(1250,80,10,10);

HarleyQuinn = createSprite(250,200,10,10);

DeadShot = createSprite(515,460,10,10);

SpiderMan = createSprite(100,710,20,20);

Thanos = createSprite(700,330,30,30);

}                                                                                                                                          

function draw(){
  
  background(0);  

  text(mouseX + "," + mouseY, mouseX, mouseY);

  Engine.update(engine);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();

  drawSprites();

}