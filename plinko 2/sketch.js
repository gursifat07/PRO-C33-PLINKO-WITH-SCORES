var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;
var turn=0;

var particle;

var gameState ="PLAY";


var line

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("yellow");
 text("Score : "+score,680,30);
 text("Turn :   " +turn,680,50);
 text(" 500 ", 15, 550);
 text(" 500 ", 90, 550);
 text(" 500 ", 170, 550);
 text(" 500 ", 250, 550);
 text(" 100 ", 330, 550);
 text(" 100 ", 410, 550);
 text(" 100 ", 490, 550);
 text(" 200 ", 570, 550);
 text(" 200 ", 650, 550);
 text(" 200 ", 730, 550);



 if ( gameState =="END") {
    
  textSize(100);
  text("GameOver", 150, 250);
  //return
}

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if (particle!=null)
{  
  particle.display();

    if (particle.body.position.y> 760){

      if(particle.body.position.x< 300){
          score=score+500;      
          particle=null;
             if ( turn>= 5) gameState ="END";     
   }
      else if(particle.body.position.x< 301){
           score=score+100;      
           particle=null;
               if ( turn>= 5) gameState ="END";     
   }

        else if(particle.body.position.x< 601) {
            score=score+200;      
            particle=null;
              if ( turn>= 5) gameState ="END";     
   }

  

}
}
}

function mousePressed(){
  if(turn>=5){
    gameState ="END"
    text("GAME OVER",400,400)
   
  }
if(gameState!="END"){
  turn=turn+1;
  particle=new Particle(mouseX,10,10,10);
}
}