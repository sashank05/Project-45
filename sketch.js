var jack, jack_running;
var jungle,jungleImage;
var netImage;
var trapImage;
var rockImage;

function preload(){
  jack_running = loadAnimation("Images/jack_running_right.png","Images/jack_running_left.png","Images/jack_landing.png");
  
  jungleImage = loadImage("Images/jungle_bg.jpg");
  
  
  netImage = loadImage("Images/net_trap.png");
  trapImage = loadImage("Images/trap.png");
  rockImage = loadImage("Images/rock.png");
}

function setup() {
  createCanvas(1228,473);
  

  
  
  jungle = createSprite(615,235,1228,473);
  jungle.addImage("jungle",jungleImage);
  //jungle.x = jungle.width /2;

  jack = createSprite(90,350,20,50);
  
  jack.addAnimation("running", jack_running);
  
  jack.scale = 0.5;
  
}

function draw() {

  background("green");

  drawSprites();
}
