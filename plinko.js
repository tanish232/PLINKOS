class Plinko{
constructor(x,y){
 var op={
     isStatic: true
 }   
 this.body=Bodies.circle(x,y,10,op) 
World.add(world,this.body);
}
display(){
var pos=this.body.position
ellipseMode(CENTER);
ellipse(pos.x,pos.y,10);
}
}