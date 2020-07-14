
  const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
engine = Engine.create();
    world = engine.world;
    var gameState = "onSling";
    var score=0;
    var backgroundImg;
    function preload(){
      getBackgroundImg();

    }
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  box1=new Box(330+50+100,235,30,40,"red")
  box2=new Box(360+50+100,235,30,40,"red")
  box3=new Box(390+50+100,235,30,40,"red")
  box4=new Box(420+50+100,235,30,40,"red")
  box5=new Box(450+50+100,235,30,40,"red")
 
  box7=new Box(360+50+100,195,30,40)
  box8=new Box(390+50+100,195,30,40)
  box9=new Box(420+50+100,195,30,40)
  box10=new Box(390+50+100,155,30,40)
  box11=new Box(270+50+100,275,30,40)
  box12=new Box(300+50+100,275,30,40)
  box13=new Box(300+80+100,275,30,40)
  box14=new Box(300+110+100,275,30,40)
 box15=new Box(300+90+50+100,275,30,40)
 box16=new Box(420+50+100,275,30,40)
 box17=new Box(450+50+100,275,30,40)
 box18=new Box(480+50+100,275,30,40)
 box19=new Box(510+50+100,275,30,40)
 box20=new Polygon(200,300,6,20,"red");
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 //box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();
 box16.score();
 box17.score();
 box18.score();
 box19.score();
 ground2=new ground(540,305,300,15)
 ground3=new ground(400,380,800,20)
slingshot=new SlingShot(box20.body,{x:250, y:100})

  
}

function draw() {
  
  if(backgroundImg)
  background(backgroundImg); 
  Engine.update(engine);
 fill("green");
 textSize(50)
 text("Score:"+ score,200,50);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box7.display();
 box8.display();
 box9.display();
 ground2.display();
 box10.display();

 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 ground3.display();
 box19.display();
 

 
 box20.display();
slingshot.display();
console.log(score)
keyPressed();
 
}

function mouseDragged(){
  if(gameState==="onSling"){
  Matter.Body.setPosition(box20.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}
function keyPressed(){
  if(keyCode===32 && gameState==="launched"){
     slingshot.attach(box20.body);
     gameState="onSling"
     
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1830){
      bg = "sun.png";
  }
  else{
      bg = "moon1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


