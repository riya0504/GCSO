var car,car2,car3, wall;
var speed, weight; 
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(60,90);
  weight=random(400,1500); 
  car=createSprite(50,200,60,50);
  car2=createSprite(50,100,60,50);
  car3=createSprite(50,300,60,50);
  

  wall=createSprite(1450,200,30,300);
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  deformation=0.5*weight*speed*speed/22509;
}

function draw() {
  background("black");  
  drawSprites();
   
  if(wall.x-car.x<(car.width+wall.width)/2)
  { car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor=color("green");
    }
  }

  if(wall.x-car2.x<(car2.width+wall.width)/2)
  { car2.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car2.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car2.shapeColor=color("green");
    }
  }

  if(wall.x-car3.x<(car3.width+wall.width)/2)
  { car3.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car3.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car3.shapeColor=color("green");
    }
  }
}