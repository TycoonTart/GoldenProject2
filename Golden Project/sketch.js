var database;
var mountainImg
var mountaineerImg,mountaineer
var canvas,gameState=0
var player1,game1
var polarBearImg,polarBear
var tiger,tigerImg


function preload(){
  mountainImg=loadImage("images/mountain.jpg")
  mountaineerImg=loadImage("images/Mountaineer.png")
  polarBearImg=loadImage("images/Polar Bear.png")
  tigerImg=loadImage("images/Tiger.png")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-5);
  database = firebase.database(); 
 mountaineer=createSprite(displayWidth/2-150,displayHeight-40,20,20)
 mountaineer.addImage(mountaineerImg)
 mountaineer.visible=false
 mountaineer.scale=0.2
 polarBear=createSprite(880,936,10,10)
 polarBear.addImage(polarBearImg)
 polarBear.scale=0.1
 polarBear.visible=false
 //tiger=createSprite(880,936,10,10)
 //tiger.addImage(tigerImg)
 //tiger.visible=false
 //tiger.scale=0.1
 game1=new Game()
  var gameStateRef=database.ref('gameState')
  gameStateRef.on("value",(data)=>{
    gameState=data.val()
  })
  
  if(gameState===0){
    player1=new Player()
    gameState=1
    database.ref('/').update({
      gameState:gameState
    });
  }
  console.log(gameState)
 if(gameState!==0){
  mountaineer.visible=true
 }
 

  
}

function draw() { 
  background(rgb(198,135,103));
  image(mountainImg, 0,-displayHeight/12,displayWidth, displayHeight+80);
  if(gameState===1){
    game1.play()
    if(keyIsDown("87")){
      mountaineer.y=mountaineer.y-0.5
      player1.distance=player1.distance+5
    }
    if(keyIsDown("65")){
      mountaineer.x=mountaineer.x-0.5
    }
    if(keyIsDown("68")){
      mountaineer.x=mountaineer.x+0.5
    }
   
  }
  
  drawSprites()
}