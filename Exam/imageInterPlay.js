let avox = 120;
let avoy = 60;
let appx = 150;
let appy = 200;
let banax = 330;
let banay = 70;

let appPic;
let banaPic;
let avoPic;

let piCartFront;
let piCartBack;

function preload() {
  appPic = loadImage('./assets/apple.png')
  avoPic = loadImage('./assets/avocados.png')
  banaPic = loadImage('./assets/banana.png')

  //cart
  piCartBack = loadImage('./assets/pinkcartback.png');
  piCartFront = loadImage('./assets/pinkcartfront.png');

}

function setup() {
  createCanvas(1202, 550);
}



function draw() {
  background(250, 220, 230);
  //Making x and y appear on the canvas when hovering
  textSize(16);
  fill(0);
  text('x =' + round(mouseX), 550, 580);
  text('y =' + round(mouseY), 550, 592);

  strokeWeight(0);

  // placing images by their center instead of corner
  imageMode(CENTER);

  //cart back
  image(piCartBack, 290, 450, 300, 200);



  // shelf 1
  fill(166, 130, 86);
  rect(50, 50, 500, 70);

  // shelf 2
  rect(50, 210, 500, 70);


  // advocado
  fill(67, 102, 70);

  image(avoPic, avox, avoy, 110, 90);

  // if function for at rykke avocado
  if (mouseIsPressed == true && mouseX > avox - 50 && mouseX < avox + 50 && mouseY > avoy - 50 && mouseY < avoy + 50) {
    avox = mouseX;
    avoy = mouseY;
  }


  // apple
  image(appPic, appx, appy, 70, 70);

  // able to move apple
  if (mouseIsPressed == true && mouseX > appx - 25 && mouseX < appx + 25 && mouseY > appy - 35 && mouseY < appy + 35) {
    appx = mouseX;
    appy = mouseY;
  }



  // cucumber
  fill(55, 74, 50);
  ellipse(400, 230, 140, 20);

  // banana
  image(banaPic, banax, banay, 120, 120);
    if (mouseIsPressed == true && mouseX > banax - 60 && mouseX < banax + 60 && mouseY > banay - 60 && mouseY < banay + 60) {
    banax = mouseX;
    banay = mouseY;
  }


  //cursor react when covering one of the fruits or vegetables
  //first is avo
  //second is apple

  if (mouseX > avox - 35 && mouseX < avox + 50 && mouseY > avoy - 50 && mouseY < avoy + 50 || mouseX > appx - 50 && mouseX < appx + 35 && mouseY > appy - 35 && mouseY < appy + 35 || mouseX > banax - 60 && mouseX < banax + 60 && mouseY > banay - 60 && mouseY < banay + 60) {
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

  image(piCartFront, 285, 500, 235, 150);


}

/* trying to make it nudge if they're too close. attempt 1
if (appx - avox <= 20) {
  avox = avox - 5;
} else if (appy - avoy <= 20) {
  avoy = avoy - 5;

}
  */



//trying to make it nudge if they're too close. 
//right now it works if you bottom apple under avo and nudge directions, but through whole y value.
// changing appy and avoy around makes nudging possible from opposite direction (top/bottom), but still whole y 
if (appy - avoy >= 20 && appx < avox && avox - appx <= 20) {
  avox = avox + 5;

} else if (appy - avoy >= 20 && avox < appx && appx - avox <= 20) {
  avox = avox - 5;

/*  still playing around with this
  else if (appy - avoy <= 20) {
  avoy = avoy - 5;

    

//cart front

}
*/
} 











