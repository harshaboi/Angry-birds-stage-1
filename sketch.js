var ball;
var res;
//namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var small_engine, world;
var ground,box1, box2, object,pig1,log1;
var box3, box4,pig2,log2,box5,log3,log4,bird;
function setup() {
  createCanvas(1200,400);
  
  small_engine = Engine.create();
  world = small_engine.world;
  

  box1 = new Box(700,355,70,70);
  box2 = new Box(900,355,70,70);
  ground = new Ground(600,400,1200,20)
  pig1 = new Pig(800,350);
  log1 = new Log(800,310,275,PI/2);

  box3 = new Box(700,265,70,70);
  box4 = new Box(900,265,70,70);
  pig2 = new Pig(800,275);
  log2 = new Log(800,220,275,PI/2);

  box5 = new Box(800,185,70,70);
  log3 = new Log(750,175,100,PI/4);
  log4 = new Log(825,175,100,-PI/4);
  bird = new Bird(100,100);
}

function draw() {
  background("black");
  Engine.update(small_engine);


  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}

//function rectMode(){
//  rect.x = rect.x-25;
//  rect.y = rect.y-25;
//}
