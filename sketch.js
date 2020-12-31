const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var world,engine;
var particles=[]
var plinkos=[]
var division=[]
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine= Engine.create();
  world= engine.world;
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10)) 
   } 
  for(var i=0;i<=width;i=i+80){
    division.push(new Division(i,800-divisionHeight/2,10,divisionHeight)) 
   }
   for(var i=40;i<=width;i=i+50){
    plinkos.push(new Plinko(i,75)) 
   } 
   for(var i=15;i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,175)) 
   } 

   for(var i=40;i<=width;i=i+50){
    plinkos.push(new Plinko(i,275)) 
   } 
   for(var i=15;i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,375)) 
   }
   console.log(particles[0])
  
  ground=new Ground(240,height,480,20);
  
}

function draw() {
  Engine.update(engine);
  background("black");
 
for (var j= 0;j<particles.length;j++){
particles[j].display();
}
for (var i= 0;i<division.length;i++){
  division[i].display();
}
for (var k= 0;k<plinkos.length;k++){
  plinkos[k].display();
}
for (var l= 0;l<plinkos.length;l++){
  plinkos[l].display();
}
for (var m= 0;m<plinkos.length;m++){
  plinkos[m].display();
}
for (var n= 0;n<plinkos.length;n++){
  plinkos[n].display();
} 
ground.display();
drawSprites();
}


