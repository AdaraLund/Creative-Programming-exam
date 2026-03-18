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

// Cas start - 'rows' + 'names' referer til datasæt. Font referer til titel skrifttypen 
let rows;
let names = [];
let co2Values = [];
let receiptFont; 
// Cas slut

function preload() {

  appPic = loadImage('./assets/apple.png');
  avoPic = loadImage('./assets/avocados.png');
  banaPic = loadImage('./assets/banana.png');

  // cart
  piCartBack = loadImage('./assets/pinkcartback.png');
  piCartFront = loadImage('./assets/pinkcartfront.png');

  // Cas start
  rows = loadStrings("./assets/Dataset.csv"); // loadStrings læser hele filen og laver et array, hvor hver linje i CSV filen bliver ét element i arrayet.
  receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');  // loadFont indlæser font-filen, så vi kan bruge den senere med textFont()
}

function setup() {
  createCanvas(1202, 550);

  // Cas - build array from the Name column
  for (let i = 1; i < rows.length; i++) { // Vi starter fra i = 1 for at springe headeren over (første linje i CSV)
    let cols = rows[i].split(";"); //der er ';' som divider imellem hver katogori i filen
    let name = cols[1];  // Henter værdien fra kolonne 1 (Name)
    let co2Val = cols[3]; // Henter "Total kg CO2-eq/kg"

    if (name && co2Val) { //Tjekker om begge værdier findes. Hvis enten name eller co2Val mangler, springes rækken over
      names.push(name.trim()); // trim() fjerner mellemrum før/efter. push() tilføjer værdien til arrayet names

      // CO2-tal fra csv virkede ikke/ de skal gøres klarere
      let formattedCo2 = float(co2Val.replace(",", "."));  // Komma erstattes med punktum fordi CSV bruger komma som decimalseparator, men vi skal bruge .
      co2Values.push(formattedCo2); // Her laves teksten om til et tal
    }
  }
// Debug og overblik i console
  console.log("amount of names found", names.length);
  console.log("rows:", rows.length);   // Antal linjer i CSV (inkl. header)
  console.log("first 10 names:", names.slice(0, 10));
  console.log("first 10 co2:", co2Values.slice(0, 10));
  console.log("1st product:", names[0], "CO2:", co2Values[0]);
  console.log("10th product:", names[10], "CO2:", co2Values[9]);
  console.log("200th product:", names[200], "CO2:", co2Values[199]);

  //Det er ikke "farligt" at 'rows' og 'amount...' ikke er det samme. Dette er pga. 'if (name && co2Val)', dvs. datasættet bliver ikke forskudt. Worst case går et par produkter tabt.
  //Cas slut
  
}

function draw() {
  background(250, 220, 230);
  //Making x and y appear on the canvas when hovering
  textSize(16);
  fill(0);
  text('x =' + round(mouseX), 30, 20); // Cas: jeg har ændret den fra 550, 580 så man kan se det);
  text('y =' + round(mouseY), 30, 40); // Cas: jeg har ændret den fra 550, 592 så man kan se det);

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

  // Tjek om varen er i kurven (
  if (banax > 170 && banax < 390 && banay > 350) { isBanaInCart = true; } else { isBanaInCart = false; }
  if (appx > 170 && appx < 390 && appy > 350) { isAppInCart = true; } else { isAppInCart = false; }
  if (avox > 170 && avox < 390 && avoy > 350) { isAvoInCart = true; } else { isAvoInCart = false; }

  //cursor react when covering one of the fruits or vegetables
  //first is avo
  //second is apple

  if (mouseX > avox - 35 && mouseX < avox + 50 && mouseY > avoy - 50 && mouseY < avoy + 50 || mouseX > appx - 50 && mouseX < appx + 35 && mouseY > appy - 35 && mouseY < appy + 35 || mouseX > banax - 60 && mouseX < banax + 60 && mouseY > banay - 60 && mouseY < banay + 60) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }


  // arrow
  // stroke(255, 254, 252);
  // strokeWeight(1);
  // fill(227, 187, 54);
  // rect(500, 500, 60, 20);
  // triangle(550, 490, 550, 530, 580, 510);

  image(piCartFront, 285, 500, 235, 150);

  // Cas start
  // Hvid kvittering til højre for hylderne 
  strokeWeight(0);
  fill(245, 241, 228); 
  rect(650, 50, 280, 450); 

  // Om overskriften
  fill(0);
  textFont(receiptFont);
  textSize(20); 
  textAlign(CENTER); 
  text("co2calculator", 650 + 140, 90);

  // Skriv varer på kvitteringen hvis de er i kurven
  textSize(14);
  textAlign(LEFT);
  let yPos = 130; // Start position for tekst rækker (130 pixels nede) Jeg har lavet det en variabel, så vi kan nøjes med at ændre det ét sted, hvis vi ønsker at rykke.

  if (isBanaInCart) {
    drawReceiptLine("Banana", yPos);
    yPos += 25; // Ryk 25 ned aka. gå til næste linje vertikalt
  }
  if (isAppInCart) {
    drawReceiptLine("Apple", yPos);
    yPos += 25;
  }
  if (isAvoInCart) {
    drawReceiptLine("Avocado", yPos);
    yPos += 25;
  }
}

// Hjælpefunktion til at finde CO2 værdi i arrayet
function drawReceiptLine(itemName, y) {
  // Vi spørger listen 'names': "Hvilket nummer på listen har f.eks. 'Banana'?" og gemmer tallet i 'index'
  let index = names.indexOf(itemName);
  // Hvis navnet findes, så gør følgende:
  if (index !== -1) {
  // Gå ind i CO2-listen på præcis samme plads og hent (co2) tallet derfra
    let co2 = co2Values[index];
  // Skriv varens navn
    text(itemName + ":", 670, y); // Manuel variabel: Kvitteringen er 650, så 670 står for "start 20 pixel inde"
    textAlign(RIGHT);
    text(co2 + " kg CO2", 910, y);
    textAlign(LEFT); // Her skiftes justeringen tilbage til venstre, så der ikke ødelægges eventuel tekst placering I har længere nede
  }
}
// Cas slut



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











