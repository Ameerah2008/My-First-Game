// divide tasks in small parts
//1. create a PC give it movements

// 2. create the background

//3. create the obstacles

//4. create NPCs

//5. make the game adaptive

//6. make the game canvas suitable for all screen size


function preload(){
  bgImage=loadImage('images/Snowfall.png')
}

function setup(){
  createCanvas(800, 600)
  //bg=createSprite(400,300)
  //bg.addImage(bgImage)
}

function draw(){
  if(bgImage){
    background(bgImage)
  }
  
}

