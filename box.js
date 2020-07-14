class Box {
  constructor(x, y, width, height) {
    var options = {
      
      'restitution':0.8,
      'friction':3,
      'density':0.1,
      'mass':5
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   this.v=255;
    this.image=loadImage("bricks.png")
    World.add(world, this.body);
  }
  score(){
    if(this.v < 0 ){
    score+=5 
    }
  }
  display(){
   if(this.body.speed<3){
    var angle= this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    imageMode(CENTER);
    image(this.image,0,0,this.width+3,this.height+3)
  pop();

   }
  else{
      World.remove(world, this.body);
      push();
     this.v = this.v-5;
      
    
    tint(255,this.v);
 
    image(this.image, this.body.position.x, this.body.position.y,33,43);
      pop();
      
   }
    
  }
  
  }
  


