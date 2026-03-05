let avox = 120;
let avoy = 60;
let appx = 150;
let appy = 200;
let appPic;
let piCartBack;

let fruitX = [avox, appx]
let fruitY = [avoy, appy];

function preload() {
  appPic = loadImage('./assets/apple.png')
  piCartBack = loadImage('./assets/pinkcartback.png');
  piCartFront = loadImage('./assets/pinkcartfront.png');
}

function setup() {
  createCanvas(600, 600);

  print(fruitX);
  print(fruitY);
}



function draw() {



  background(220);
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

  //play trash can, to be made into image
  fill(50);
  rect(40, 450, 90, 120, 40);

  // advocado
  fill(67, 102, 70);
  ellipse(avox, avoy, 50, 70);

  // if function for at rykke avocado
  if (mouseIsPressed == true && mouseX > avox - 25 && mouseX < avox + 25 && mouseY > avoy - 35 && mouseY < avoy + 35) {
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
  fill(214, 202, 92);
  ellipse(330, 70, 140, 20);
  fill(107, 85, 58);
  ellipse(400, 70, 20, 10);

  //cursor react when covering one of the fruits or vegetables
  //first is avo
  //second is apple



  for (let i = 0; i < fruitX.length; i++) {
    for (let z = 0; z < fruitY.length; z++) {
      if (mouseX > fruitX[i] - 35 && mouseX < fruitX[i] + 35 && mouseY > fruitY[z] - 35 && mouseY < fruitY[z] + 35) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
    }
  }

  /*
   if (mouseX > avox - 35 && mouseX < avox + 35 && mouseY > avoy - 35 && mouseY < avoy + 35 || mouseX > appx - 35 && mouseX < appx + 35 && mouseY > appy - 35 && mouseY < appy + 35) {
     cursor(HAND);
   } else {
     cursor(ARROW);
   }
 */
  push();

  // arrow
  stroke(255, 254, 252);
  strokeWeight(1);
  fill(227, 187, 54);
  rect(500, 500, 60, 20);
  triangle(550, 490, 550, 530, 580, 510);
  pop();


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


  } /*  still playing around with this
  else if (appy - avoy <= 20) {
  avoy = avoy - 5;

}
  */

  //cart front
  image(piCartFront, 285, 500, 235, 150);

  rect(40, 450, 90, 120, 4);
}


function detect(){


}

