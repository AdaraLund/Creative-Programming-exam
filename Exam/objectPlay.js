 
let apple = { //defines object
  x: 150, // placement x
  y: 200, //placement y
  sizeX: 70, // size x
  sizeY: 70 // size y
};

let avocado = {//defines object
  x: 120, // placement x
  y: 60, //placement y
  sizeX: 110, // size x
  sizeY: 90, // size y
};

let banana = {//defines object
  x: 330, // placement x
  y: 70, //placement y
  sizeX: 120, // size x
  sizeY: 120, // size y
};

let piCartFront;
let piCartBack;

function preload() { // adding images to objects here, as we cant call loadImage function outside of functions
  apple.img = loadImage('./assets/apple.png')// adds image to apple object
  avocado.img = loadImage('./assets/avocados.png')// adds image to avo object
  banana.img = loadImage('./assets/banana.png') //adds image to bana object

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


  image(avocado.img, avocado.x, avocado.y, avocado.sizeX, avocado.sizeY);

  // if function for at rykke avocado
  if (mouseIsPressed == true && mouseX > avocado.x - 50 && mouseX < avocado.x + 50 && mouseY > avocado.y - 50 && mouseY < avocado.y + 50) {
    avocado.x = mouseX;
    avocado.y = mouseY;
  }


  // apple
  image(apple.img, apple.x, apple.y, apple.sizeX, apple.sizeY);

  // able to move apple
  if (mouseIsPressed == true && mouseX > apple.x - 25 && mouseX < apple.x + 25 && mouseY > apple.y - 35 && mouseY < apple.y + 35) {
    apple.x = mouseX;
    apple.y = mouseY;
  }



  // cucumber
  fill(55, 74, 50);
  ellipse(400, 230, 140, 20);

  // banana
  image(banana.img, banana.x, banana.y, banana.sizeX, banana.sizeY);
  if (mouseIsPressed == true && mouseX > banana.x - 60 && mouseX < banana.x + 60 && mouseY > banana.y - 60 && mouseY < banana.y + 60) {
    banana.x = mouseX;
    banana.y = mouseY;
  }


  //cursor react when covering one of the fruits or vegetables
  //first is avo
  //second is apple

  if (mouseX > avocado.x - 35 && mouseX < avocado.x + 50 && mouseY > avocado.y - 50 && mouseY < avocado.y + 50 || mouseX > apple.x - 50 && mouseX < apple.x + 35 && mouseY > apple.y - 35 && mouseY < apple.y + 35 || mouseX > banana.x - 60 && mouseX < banana.x + 60 && mouseY > banana.y - 60 && mouseY < banana.y + 60) {
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
if (apple.x - avocado.x <= 20) {
  avocado.x = avocado.x - 5;
} else if (apple.y - avocado.y <= 20) {
  avocado.y = avocado.y - 5;

}
  */



//trying to make it nudge if they're too close. 
//right now it works if you bottom apple under avo and nudge directions, but through whole y value.
// changing apple.y and avocado.y around makes nudging possible from opposite direction (top/bottom), but still whole y 
if (apple.y - avocado.y >= 20 && apple.x < avocado.x && avocado.x - apple.x <= 20) {
  avocado.x = avocado.x + 5;

} else if (apple.y - avocado.y >= 20 && avocado.x < apple.x && apple.x - avocado.x <= 20) {
  avocado.x = avocado.x - 5;

  /*  still playing around with this
    else if (apple.y - avocado.y <= 20) {
    avocado.y = avocado.y - 5;
  
      
  
  //cart front
  
  }
  */
}











