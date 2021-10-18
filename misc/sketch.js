let positionX = 400;
let positionY = 300;
let velocityX = 4;
let velocityY = 7;
let radius = 25;
let size = radius * 2;
let sideSwitch = 0;
let r = 100;
let g = 100;
let b = 100;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  drawBackground();
  moveBall();
  drawBall();
  print(mouseX, mouseY, velocityX, velocityY)
}

function drawBackground(){
  fill(200, 200, 200);
  rect(100, 100, 600, 600);
}
function drawBall(){
  stroke(0);
  //the ball is filled with a randomized rgb color
  changeColor()
  fill(r,g,b);
  ellipse(positionX,positionY,size,size);
}

function moveBall(){
  // Move the Ball
  positionX = positionX + velocityX;
  positionY = positionY + velocityY;
  
  // code to check if we hit right or left side of rectangle
  if (positionX + radius >= width - 100) {
    positionX = width - radius - 100;
    velocityX = velocityX * -1.0;
    sideSwitch = 0;
  }
  else if (positionX - radius <= 100) {
    positionX = radius + 100;
    velocityX = velocityX * -1.0;
    sideSwitch = 1;
  }
  
  // code to check if we hit top or bottom
  if (positionY + radius >= height - 100) {
    positionY = height - radius - 100;
    velocityY = velocityY * -1.0;
    sideSwitch = 0;
  }
  else if (positionY - radius <= 100) {
    positionY = radius + 100;
    velocityY = velocityY * -1.0;
    sideSwitch = 1;
  }
}

function changeColor(){
  // if the ball hits any side random r, g, and b values are assigned
  if ((positionX + radius == width - 100)){
    r = random(255);
    g = random(255);
    b = random(255);
  }
  else if(positionX - radius == 100){
    r = random(255);
    g = random(255);
    b = random(255);
  }
  else if(positionY + radius == height - 100){
    r = random(255);
    g = random(255);
    b = random(255);
  }
  else if(positionY - radius == 100){
    r = random(255);
    g = random(255);
    b = random(255);
  }
}