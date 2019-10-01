

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255);
    frameRate(50)
  }
  
  function draw() {
    //setting random square 
    var locX = random(0,windowWidth);
    var locY = random(0,windowHeight);
    var size = random(10,60);
    square(locX,locY,size);

    //4 section color
    if(mouseY>windowHeight/2){
      if(mouseX>windowWidth/2){
        //blue
        fill(0,100,random(100,255));
      }else{
        //green
        fill(0,220,random(0,220)); 
      }
    }
    else{
      if(mouseX>windowWidth/2){
        //yellow
        fill(255,255,random(0,255));
      }else{  
        //white n grey  
        fill(0,random(0,50)); 
      }
    } 
  }