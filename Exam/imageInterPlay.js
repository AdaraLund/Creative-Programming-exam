// Main File

let avox = 120;
let avoy = 60;
let appx = 150;
let appy = 200;
let banax = 330;
let banay = 70;
let cucux = 140;
let cucuy = 20;

let appPic;
let banaPic;
let avoPic;

let piCartFront;
let piCartBack;

// Cas start 
let rows; // datasæt
let names = []; // datasæt, produkt navne
let co2Values = []; // datasæt, co2 "pris"

let receiptFont; // kvittering
let paperTexture; // kvittering
let paperScaleFix = 1.4;

let receiptX = 1200;
let receiptY = 50;
let receiptW = 300;
let receiptH = 450;
// Cas end


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
  paperTexture = loadImage('./assets/paperTexture.png');
  // Cas end
}

function setup() {
  createCanvas(1200, 550);


  // Cas - build array from the Name column
  for (let i = 1; i < rows.length; i++) { // Vi starter fra i = 1 for at springe headeren over (første linje i CSV)
    let cols = rows[i].split(";"); //der er ';' som divider imellem hver katogori (kolonne fra excel) i filen
    let name = cols[1];  // Henter værdien fra kolonne 1 (Name)
    let co2Val = cols[3]; // Henter "Total kg CO2-eq/kg"

    if (name && co2Val) { //Tjekker om begge værdier findes. Hvis enten name eller co2Val mangler, springes rækken over
      names.push(name.trim()); // trim() fjerner mellemrum før/efter. push() tilføjer værdien til arrayet names

      // Fiks CO2-tal fra csv
      let formattedCo2 = float(co2Val.replace(",", "."));  // Komma erstattes med punktum fordi CSV bruger komma som decimalseparator, men vi skal bruge .
      co2Values.push(formattedCo2); // Her laves teksten om til et tal
    }
  }
  // Console for nemmere debugging og overblik 
  console.log("amount of names found", names.length);
  console.log("rows:", rows.length);   // Antal linjer i CSV (inkl. header)
  console.log("first 10 names:", names.slice(0, 10));
  console.log("first 10 co2:", co2Values.slice(0, 10));
  console.log("1st product:", names[0], "CO2:", co2Values[0]);
  console.log("10th product:", names[10], "CO2:", co2Values[9]);
  console.log("200th product:", names[200], "CO2:", co2Values[199]);

  //Det er ikke "farligt" at 'rows' og 'amount...' ikke er det samme. Dette er pga. 'if (name && co2Val)', dvs. datasættet bliver ikke forskudt. Worst case går et par produkter tabt.
  //Cas end

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
  image(piCartBack, 600, 450, 300, 200);


  // shelf 1
  fill(166, 130, 86);
  rect(50, 50, 500, 70);

  // shelf 2
  rect(50, 210, 500, 70);

  // shelf 3 
  rect(650, 50, 500, 70);

  // shelf 4 
  rect(650, 210, 500, 70);

  // advocado
  fill(67, 102, 70);

  // avocado
image(avoPic, avox, avoy, 110, 90);
if (mouseIsPressed &&
    mouseX > avox && mouseX < avox + 110 && 
    mouseY > avoy && mouseY < avoy + 90) {
// we make sure that the mouse is inside the avo image
  avox = random(550, 600); // random x value for inside the cart
  avoy = random(440, 480); // random y value for inside the cart
}


// apple
image(appPic, appx, appy, 70, 70);
if (mouseIsPressed &&
    mouseX > appx && mouseX < appx + 70 &&
    mouseY > appy && mouseY < appy + 70) {
  appx = random(600, 650);
  appy = random(480, 520);
} else{
  x = appx;
  y = appy;
}


// banana
image(banaPic, banax, banay, 120, 120);
if (mouseIsPressed &&
    mouseX > banax && mouseX < banax + 120 &&
    mouseY > banay && mouseY < banay + 120) {

  banax = random(580, 630);
  banay = random(450, 500);
}

// cucumber
fill(55, 74, 50);
ellipse(400, 230, 140, 20);
if (mouseIsPressed &&
  mouseX > cucux && mouseX < cucux + 140 &&
  mouseY > cucuy && mouseY < cucuy + 20) {
cucux = random(580, 630);
cucuy = random(450, 500);
  }

  // Cas start - Tjek om x vare er i kurven 
  // MANUELLE VARIABLER alle numre nedenfor
  isBanaInCart = banax > 470 && banax < 720 && banay > 350 && banay < 560;
  isAppInCart  = appx  > 470 && appx  < 720 && appy  > 350 && appy  < 560;
  isAvoInCart  = avox  > 470 && avox  < 720 && avoy  > 350 && avoy  < 560;
  // Cas end

  //cursor react when covering one of the fruits or vegetables
  //first is avo
  //second is apple

  if (mouseX > avox - 35 && mouseX < avox + 50 && mouseY > avoy - 50 && mouseY < avoy + 50 || mouseX > appx - 50 && mouseX < appx + 35 && mouseY > appy - 35 && mouseY < appy + 35 || mouseX > banax - 60 && mouseX < banax + 60 && mouseY > banay - 60 && mouseY < banay + 60) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  image(piCartFront, 595, 500, 235, 150);

  // Cas start
  // Kvittering - Papirets område

  // Kvittering - Placering af billede af papir
  image(paperTexture, receiptX + receiptW / 2, receiptY + receiptH / 2, receiptW * paperScaleFix, receiptH * paperScaleFix); //pga. png. billede bruges scalfix. kan ændres i let

  // Om overskriften
  fill(0);
  textFont(receiptFont);
  textSize(20);
  textAlign(CENTER);
  text("CO2 Calculator", receiptX + receiptW / 2, receiptY + 55); // MANUEL VARIABLE: 60 = hvor langt nede tekst starter

  // Skriv varer på kvitteringen hvis de er i kurven
  textSize(14);
  textAlign(LEFT);
  let yPos = 140; // MANUEL VARIABEL - Start position for tekst rækker 
  let totalCO2 = 0; // Vi starter totalen på 0 hver gang draw kører


  if (isBanaInCart) {
    drawReceiptLine("Banana", yPos);
    totalCO2 += getCO2Value("Banana"); // læg bananens CO2 til totalen
    yPos += 25; // Ryk tekst 25 ned aka. gå til næste linje vertikalt
  }
  if (isAppInCart) {
    drawReceiptLine("Apple", yPos);
    totalCO2 += getCO2Value("Apple");
    yPos += 25;
  }
  if (isAvoInCart) {
    drawReceiptLine("Avocado", yPos);
    totalCO2 += getCO2Value("Avocado");
    yPos += 25;
  }

  // Layout for totalen
  stroke(0);
  strokeWeight(2);
  line(receiptX + 30, receiptY + 380, receiptX + 270, receiptY + 380); // Den lille adskillelsesstreg. MANUEL VARIABEL

  // "TOTAL"
  noStroke();
  textSize(18);
  textAlign(LEFT);
  text("TOTAL:", receiptX + 34, receiptY + 420); // MANUEL VARIABEL

  // "0.00 KG"
  textAlign(RIGHT);
  text(totalCO2.toFixed(2) + " kg", receiptX + 260, receiptY + 420); // MANUEL VARIABEL // .toFixed(2) sørger for at der kun er 2 decimaler
  textAlign(LEFT);

}

// Funktion til at beregne totalen
function getCO2Value(itemName) {
  let index = names.indexOf(itemName); // finder indexet/"hvor varen bor i listen"
  if (index !== -1) { // Tjek om varen er fundet. 
    // Hvis ja: tag tallet fra co2Values og send det "hjem" til draw()
    return co2Values[index]; // Send tallet tilbage til totalCO2
  }
  // Hvis nej: læg 0 til
  return 0;
}

// tegner en enkelt linje på kvitteringen.
function drawReceiptLine(itemName, y) {
  let index = names.indexOf(itemName);   // Vi spørger listen 'names': "Hvilket nummer på listen f.eks. 'Banana' har?" og gemmer tallet i 'index'
  if (index !== -1) {                   // Hvis navnet findes, så gør følgende:
    let co2 = co2Values[index];        // Gå ind i CO2-listen på præcis samme plads og hent (co2) tallet derfra
    // Skriv varens navn
    text(itemName, receiptX + 30, y);    // MANUEL VARIABEL
    textAlign(RIGHT);
    text(co2 + " kg CO2", receiptX + 260, y); // MANUEL VARIABEL
    textAlign(LEFT);               // Her skiftes justeringen tilbage til venstre, så der ikke ødelægges eventuel tekst placering I har længere nede
  }
}
// Cas end



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






