var fr,mr
function setup() {
  createCanvas(800,400);
 fr= createSprite(200, 200, 80, 50);
 mr= createSprite(100, 200, 50, 80)
 fr.shapeColor="red"
 mr.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  mr.x=mouseX
  mr.y=mouseY
  if(fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.x-fr.x<fr.width/2+mr.width/2&&
    fr.y-mr.y<fr.height/2+mr.height/2&&
    mr.y-fr.y<fr.height/2+mr.height/2){
    fr.shapeColor="blue"
 mr.shapeColor="blue"
  }
else{
  fr.shapeColor="red"
 mr.shapeColor="red"
}
  
  drawSprites();
}