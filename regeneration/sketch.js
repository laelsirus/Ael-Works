var cellMovementTop = [];
var cellMovementBottom = [];
let stepProb;
let randomColor;
let randomStroke;
let choice;
let speed;
let infect;
let recover;
let cellSize;
let healthy;

function setup() {
  title = createElement('h2', "<a href='javascript:history.go(-1)' style='color: white'>BACK</a>");
  title.position(40, 0);

  canvas = createCanvas(windowWidth, windowHeight * 0.7);
  canvas.position(0, 200);
  canvas.class("artwork");

  description0 = "\
  regeneration \
  ";

  description1 = "\
  Visualization of regeneration, binding, and damage of detached neurons <br/> \
  Hurt, heal, scar and grow \
  ";

  description2 = "\
  - Keeping the clicks will cause cell damage \
  ";

  text = createDiv(description0);
  text.position(30, 60);
  text.style("font-family", "monospace");
  text.style("font-size", "20pt")

  text = createDiv(description1);
  text.position(50, 100);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  text = createDiv(description2);
  text.position(50, 140);
  text.style("font-family", "monospace");
  text.style("font-size", "10pt");

  background(0);
  speed = 3;
  recover = 13;
  infect = 0;
  stepProb = 13;
  
  for (var i = 0; i < windowWidth * windowWidth / 10000; i++) {
     cellMovementTop[i] = new CellMovementTop();
  }
  for (var j = 0; j < windowWidth * windowWidth / 10000; j++) {
     cellMovementBottom[j] = new CellMovementBottom(); 
  } 
}

function draw() {
  background(0, 1);
  recover = 13;

  if (healthy == 1) {
    speed = speed + 0.03;
  }
  else if (infect ==1){
    speed = 2;
  }
  else {
    speed= 3;
  }
  
  if (mouseIsPressed) {
    speedABS = -abs(speed);   
    infect = 1;
    for (var i = 0; i < cellMovementTop.length; i++) {
      cellMovementTop[i].step();
      cellMovementTop[i].render();
    }
    for (var j = 0; j < cellMovementBottom.length; j++) {
      cellMovementBottom[j].step();
      cellMovementBottom[j].render();
    }
  }
  else {
    speedABS = +abs(speed); 
    infect = 0;
    for (var i= 0; i < cellMovementTop.length; i++) {
     cellMovementTop[i].step();
     cellMovementTop[i].render();
    }  
    for (var j = 0; j < cellMovementBottom.length; j++) {
     cellMovementBottom[j].step();
     cellMovementBottom[j].render();
    }  
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.7);

  for (var i = 0; i < windowWidth * windowWidth / 10000; i++) {
     cellMovementTop[i] = new CellMovementTop();
  }
  for (var j = 0; j < windowWidth * windowWidth / 10000; j++) {
     cellMovementBottom[j] = new CellMovementBottom(); 
  } 
}

class CellMovementTop {
  constructor(){
    this.x = random(windowWidth);
    this.y = -30;
  }

  render() {
    randomStroke = random (0, cellSize);
    
    strokeWeight(randomStroke);
    stroke(random(200) * (infect * -1 + 1), random(100) * (infect * -1 + 1), 255 * (infect * -1 + 1), recover);
    point(this.x,this.y);
  }

  step() {     
    choice = floor(random(0, stepProb));
    if (choice < 5) {
      this.x++;
    }
    else if (choice > 5 && choice <= 10) {
      this.x--;
    }
    else if (choice > 10) {
      this.y = this.y + speedABS;
    }
    this.x = constrain(this.x ,-10, windowWidth + 10);

    if (infect == 1) {
      this.y = constrain(this.y, -30, height / 2); 
    }
    else {
      this.y = constrain(this.y ,-30 ,height + 30);
    }

    if (infect == 1) {
      recover = 15;
      cellSize = 13;
      healthy = 0;
      stepProb = 12;
    }    
    else if (this.y > height / 2 - 50) {
      recover = recover + 0.3;
      cellSize = 7;
      healthy = 1;
      stepProb = 13;
    }
    else {
      cellSize = 7;
      healthy = 0;
      stepProb = 13;
    }
  }
}

class CellMovementBottom {
  constructor(){
    this.x = random(windowWidth);
    this.y = height + 30;
  }

  render() {
    randomStroke = random (0, cellSize);
    
    strokeWeight(randomStroke);
    stroke(random(200) * (infect * -1 + 1), random(100) * (infect * -1 + 1), 255 * (infect * -1 + 1), recover);
    point(this.x,this.y);
  }

  step() {     
    choice = floor(random(0, stepProb));
    if (choice < 5) {
      this.x++;
    }
    else if (choice > 5 && choice <= 10) {
      this.x--;
    }
    else if (choice > 10) {
      this.y = this.y - speedABS;
    }
    this.x = constrain(this.x, -10, windowWidth + 10);
    
    if (infect == 1) {
      this.y = constrain(this.y, height / 2, height + 30); 
    }
    else {
      this.y = constrain(this.y, -30, height + 30);
    }
    
    if (infect == 1) {
      recover = 15;
      cellSize = 13;
      healthy = 0;
      stepProb = 12;
    }    
    else if (this.y < height / 2 + 50) {
      recover = recover + 0.3;
      cellSize = 7;
      healthy = 1;
      stepProb = 13;
    }
    else {
      cellSize = 7;
      healthy = 0;
      stepProb = 13;
    }
  }
}