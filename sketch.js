const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var dividers=[];
var particles=[];
var pilnkos=[];
var divisionHeight=300;
var d;
var side1,side2;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height-5,10);

  for (var k = 0; k<=width; k = k + 80) {
    dividers.push(new Divider(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 10; j<=width; j = j + 50) {
    pilnkos.push(new Plinko(j,60));
  } 
  for (var j = 20; j<=width-20; j = j + 50) {
    pilnkos.push(new Plinko(j,140));
  }
  for (var j = 10; j<=width; j = j + 50) {
    pilnkos.push(new Plinko(j,220));
  }
  for (var j = 20; j<=width-20; j = j + 50) {
    pilnkos.push(new Plinko(j,300));
  }

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for(var i=0;i<dividers.length;i++){
    dividers[i].display();
  }
  for(var i=0;i<pilnkos.length;i++){
    pilnkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(30, 450),0));
  }
  for(var l=0;l<particles.length;l++){
    particles[l].display();
  }

  drawSprites();
}
