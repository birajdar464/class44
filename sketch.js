var bgImage,bg;
 var earth,earthImg;

function preload(){
  bgImage= loadImage("images/68j.gif")
  earthImg = loadImage("images/earthGif.gif")
}

function setup(){
  
  createCanvas(1500,1000 );
  bg=createSprite(200,0,3000,1000);
  bg.scale= 5;
  bg.addImage("background",bgImage)
 // bg.velocityX=-1

  earth=createSprite(100,100,100,100)
  earth.addImage("revolvingEarth",earthImg);
  earth.scale= 2;
  //console.log(windowWidth)
  //console.log(windowHeight)
}

function draw() {
 // background("white");
  if(bg.x<0){
    bg.x=width/2
  }
  
  drawSprites();
}