let avox = 120;
let avoy = 60;

function setup() {
  createCanvas(600, 600);
}



function draw() {
  background(220);
  strokeWeight(0);

  // shelf 1
  fill(166, 130, 86);
  rect(50, 50, 500, 70);

  // shelf 2
  rect(50, 210, 500, 70);

  // basket
  fill(204, 124, 108);
  rect(240, 380, 140, 160);

  // advocado
  fill(67, 102, 70);
  ellipse(avox, avoy, 50, 70);
  // if function for at rykke avocado
  if (mouseIsPressed == true && mouseX > avox - 25 && mouseX < avox + 25 && mouseY > avoy - 35 && mouseY < avoy + 35) {
    avox = mouseX;
    avoy = mouseY;
  }


  // apple
  fill(191, 83, 54);
  
  ellipse(160, 220, 50, 60);


  // cucumber
  fill(55, 74, 50);
  ellipse(400, 230, 140, 20);

  // banana
  fill(214, 202, 92);
  ellipse(330, 70, 140, 20);
  fill(107, 85, 58);
  ellipse(400, 70, 20, 10);

  if (mouseX > avox - 25 && mouseX < avox + 25 && mouseY > avoy - 35 && mouseY < avoy + 35) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  // arrow
  stroke(255, 254, 252);
  strokeWeight(1);
  fill(227, 187, 54);
  rect(500, 500, 60, 20);
  triangle(550, 490, 550, 530, 580, 510);


}

