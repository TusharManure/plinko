var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var back;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";

function preload(){
  back=loadImage("1.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(displayWidth,height,10000,20);
 
  ground2 = new Ground (1400,displayHeight/2,380,displayHeight);
  

   for (var k = 0; k <=1220; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=1220; j=j+50) {
      fill("red")
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=1220-10; j=j+50) {
      fill(0)
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=1220; j=j+50) {
      fill(0)
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=1220-10; j=j+50) {
      fill(0)
        plinkos.push(new Plinko(j,375));
    }

    for (var j = 65; j <=1220-10; j=j+50) {
      fill(0)
      plinkos.push(new Plinko(j,475));
  }
  
    
}
 
function draw() {
  background(back);
 
  ground2.display();
  push();
  textSize(35)

  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 300 ", 560, 550);
  text(" 300 ", 640, 550);
  text(" 300 ", 720, 550);
  
  text(" 120 ",720+75,550)
  text(" 120 ",720+75+75,550)
  text(" 120 ",720+75+75+85,550)
  text(" 120 ",720+75+85+75+85,550)
  text(" 120 ",720+75+75+85+85+75,550)
  pop();
  
Color();
  Engine.update(engine);
  ground.display();
  
  if ( count>= 5) {
    gameState ="end";
    fill("red")
    textSize(50);
    text("GameOver",850+400 , 400);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
     
    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     particles.pop();
   }
    else if (particles[i].body.position.x < 1200 && particles[i].body.position.x > 901 && particles[i].body.position.y > 760) {
    score = score + 120;
    particles.pop();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   fill("blue")
textSize(45)
text("Score : "+score,850+400,40);
 
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}

function Color(){
  push();
textSize(30)
fill("blue")

  text("Press F11 To ",850+440,200)
  text("Play In Full Screen",800+440,230)
  
  pop();
}