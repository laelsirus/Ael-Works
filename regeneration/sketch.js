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
  title = createElement('h2', "<a href='https://laelsirus.github.io/AelWorks/videos.html'> HOME</a> regeneration");
  title.position(20, 0);

  canvas = createCanvas(1440, 540);
  canvas.position(20, 120);
  canvas.class("artwork");

  description1 = "\
  떨어진 신경 세포의 재생, 결합, 손상을 시각화 <br/> \
  상처받고 아물고 흉터가 생기고 성장한다 \
  ";

  description2 = "\
  클릭을 유지하면 세포의 손상이 발생합니다 \
  ";

  text = createDiv(description1);
  text.position(20, 60);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  text = createDiv(description2);
  text.position(20, 680);
  text.style("font-family", "monospace");
  text.style("font-size", "10pt");

  background(0);
  speed = 3;
  recover = 13;
  infect = 0;
  stepProb = 13;
  
  for (var i = 0; i < 150; i++) {
     cellMovementTop[i] = new CellMovementTop();
  }
  for (var j = 0; j < 150; j++) {
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

class CellMovementTop {
  constructor(){
    this.x = random(width);
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
    this.x = constrain(this.x ,-10, width + 10);

    if (infect == 1) {
      this.y = constrain(this.y, -30, height / 2); 
    }
    else {
      this.y = constrain(this.y ,-30 ,height + 30);
    }

    if (infect == 1) {
      recover = 15;
      cellSize = 20;
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
    this.x = random(width);
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
    this.x = constrain(this.x, -10, width + 10);
    
    if (infect == 1) {
      this.y = constrain(this.y, height / 2, height + 30); 
    }
    else {
      this.y = constrain(this.y, -30, height + 30);
    }
    
    if (infect == 1) {
      recover = 15;
      cellSize = 20;
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