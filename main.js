let returningGrocery = [], groceryList = [], clickedGrocery = [];
let LDX = 600, RDX = 600, doorsOpening = false;
let backgroundSong, basketSound, sadSong, checkoutSound, startSound, restartSound, putBackSound;
let soundOn = false, currentSong = 0, scene = 0, finalCO2 = 0;
let scrollOffset = 0;
const MAX_VIS = 9, ROW_H = 30, RECEIPT_Y0 = 130;

function getFact(c) {
  if (c < 0.5) return "That's equivalent to sending a few emails!";
  if (c < 2)   return "That's equivalent to driving a few km by car.";
  if (c < 5)   return "That's equivalent to 1 kg of red meat.";
  if (c < 10)  return "That's equivalent to a pair of imported jeans.";
  if (c < 15)  return "That's equivalent to growing 1 kilo of greenhouse tomatoes.";
  if (c < 20)  return "That's equivalent to a year of video gaming.";
  return "That's equivalent to a year of watching TV";
}

function preload() {
  const li = (p) => loadImage('./assets/images/' + p);
  piCartBack = li('pinkcartback.png'); piCartFront = li('pinkcartfront.png');
  backbackground = li('backbackground.png'); extraStone = li('extraStone.png');
  frontbackground = li('frontbackground.png'); shelfbasketbackground = li('shelfbasket.png');
  frontbaguettebasket = li('frontbreadbasket.png'); xImg = li('x.png');
  wares = li('waresDark.png'); startPage = li('startScreen.png');
  backStartPage = li('backStartScreen.png'); rightDoor = li('rightdoor.png');
  leftDoor = li('leftdoor.png'); extraBricks = li('extrabricks.png');
  nameSign = li('sign.png'); sideSign = li('blankSign.png');
  paperTexture = li('paperTexture.png'); sound = li('sound.png'); noSound = li('noSound.png');
  restartImg = li('restart.png');

  const lp = (n) => loadImage('./assets/images/plants/' + n);
  [plant1_1,plant1_2,plant1_3] = [lp('plant1_1.png'),lp('plant1_2.png'),lp('plant1_3.png')];
  [plant2_1,plant2_2,plant2_3] = [lp('plant2_1.png'),lp('plant2_2.png'),lp('plant2_3.png')];
  [plant3_1,plant3_2,plant3_3] = [lp('plant3_1.png'),lp('plant3_2.png'),lp('plant3_3.png')];
  [plant4_1,plant4_2,plant4_3] = [lp('plant4_1.png'),lp('plant4_2.png'),lp('plant4_3.png')];
  notforsale = lp('notforsale.png'); saleSign = lp('saleSign.png');

  const ig = (n, img) => { let i = li(n); if (img) i.resize(...img); return i; };
  cracks = ig('cracks.png', [1200, 550]);
  cracksExtra = ig('cracksExtra.png', [1200, 550]);

  const imgs = ['apple','avocado','banana','cucumber','carrot','watermelon','water','wine',
    'rugbr','baguette','toast','beer','cookie','milk','oatmilk','soda','chicken','eggs',
    'cheese','chips','nutella','flowers','oreo','ramen','cornflakes'];
  const vars = ['apple','avocado','banana','cucumber','carrot','watermelon','water','wine',
    'ryebread','baguette','toast','beer','cookies','milk','oatMilk','soda','chicken','eggs',
    'cheese','chips','nutella','flowers','oreo','ramen','cornflakes'];
  imgs.forEach((n, i) => window[vars[i] + 'Img'] = li(n + '.png'));

  receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');
  const ls = (p) => loadSound('assets/sounds/' + p);
  basketSound = ls('basket.mp3'); backgroundSong = ls('backgroundMusic.mp3');
  sadSong = ls('sadMusic.mp3'); checkoutSound = ls('Checkout.mp3');
  startSound = ls('Start.mp3'); restartSound = ls('Restart.mp3');
  putBackSound = ls('putBack.mp3');
}

function setup() {
  let fd = createElement('div');
  fd.style('position','absolute'); fd.style('top','50%'); fd.style('left','50%');
  fd.style('transform','translate(-50%, -50%)'); fd.style('width','1610px');
  fd.style('height','810px');
  fd.style('background-image','url(./assets/images/frame.png)');
  fd.style('background-size','100% 100%'); fd.style('pointer-events','none');

  let canvas = createCanvas(1200, 600);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  frameRate(60); strokeWeight(0); imageMode(CENTER);

  const G = (x, y, sx, sy, img, co2, name) => new Grocery(x, y, sx, sy, img, co2, name);
  apple      = G(750,300,60,60,appleImg,0.61,"Apple");
  banana     = G(550,386,80,60,bananaImg,1.02,"Banana");
  avocado    = G(610,310,70,50,avocadoImg,0.73,"Avocado");
  cucumber   = G(440,310,120,50,cucumberImg,0.14,"Cucumber");
  carrot     = G(340,380,120,90,carrotImg,0.27,"Carrot");
  watermelon = G(722,400,90,90,watermelonImg,1.2,"Watermelon");
  water      = G(77,99,30,70,waterImg,0.28,"Water");
  wine       = G(330,60,32,100,wineImg,1.24,"Wine");
  ryebread   = G(425,177,98,50,ryebreadImg,1.02,"Ryebread");
  baguette   = G(225,350,60,160,baguetteImg,0.81,"Baguette");
  toast      = G(540,173,60,70,toastImg,0.81,"Toast");
  beer       = G(180,100,40,65,beerImg,0.22,"Beer");
  cookies    = G(610,255,95,45,cookiesImg,0.73,"Cookies");
  milk       = G(102,170,33,55,milkImg,0.50,"Milk");
  oatMilk    = G(168,168,35,59,oatMilkImg,0.40,"Oatmilk");
  soda       = G(130,97,40,70,sodaImg,0.88,"Soda");
  chicken    = G(185,240,55,65,chickenImg,4.91,"Chicken");
  eggs       = G(150,370,55,55,eggsImg,0.58,"Eggs");
  cheese     = G(150,317,60,60,cheeseImg,1.08,"Cheese");
  chips      = G(850,250,57,60,chipsImg,0.74,"Chips");
  nutella    = G(732,250,50,60,nutellaImg,3.1,"Nutella");
  flowers    = G(690,82,110,70,flowersImg,1.67,"Flowers");
  oreo       = G(420,260,83,34,oreoImg,0.44,"Oreo");
  ramen      = G(850,180,53,53,ramenImg,0.14,"Ramen");
  cornflakes = G(680,173,63,73,cornflakesImg,1.22,"Cornflakes");

  groceryList.push(nutella,flowers,oreo,ramen,cornflakes,chips,cheese,eggs,chicken,
    soda,oatMilk,milk,cookies,beer,banana,avocado,cucumber,carrot,watermelon,
    apple,water,wine,ryebread,baguette,toast);

  const x = (windowWidth - width) / 2, y = (windowHeight - height) / 2;
  const btnStyle = (b, fs, p) => {
    b.style("font-family","Special Elite"); b.style("font-size",fs);
    b.style("padding",p); b.style("background-color","white");
    b.style("color","black"); b.style("border-radius","5px"); b.style("cursor","pointer");
  };
  button1 = createButton('Start'); button1.mousePressed(Starting);
  button1.position(x+552, y+525); btnStyle(button1,"24px","5px 20px");

  button2 = createButton('Checkout'); button2.mousePressed(handleCheckout);
  button2.position(x+1020, y+535); button2.hide(); btnStyle(button2,"19px","7px 17px");

  button3 = createButton('Restart'); button3.mousePressed(Restarting);
  button3.position(x+510, y+300); button3.hide();
  button3.style("font-family","Special Elite"); button3.style("font-size","35px");
  button3.style("padding","7px 24px"); button3.style("background-color","white");
  button3.style("color","black"); button3.style("border-radius","6px"); button3.style("cursor","pointer");
}

function draw() {
  if (scene === 0) {
    image(backStartPage, 600, 327, 1200, 550);
    image(extraBricks, 600, 90, 1200, 550);
    image(extraBricks, 600, 110, 1200, 550);
    image(rightDoor, RDX, 337, 1200, 550);
    image(leftDoor, LDX, 337, 1200, 550);
    image(startPage, 600, 337, 1200, 550);
    image(sideSign, 1045, 360, 278, 120);
    image(nameSign, 610, 55, 350, 100);
    textAlign(CENTER, CENTER); fill(0); textFont(receiptFont); textSize(13);
    text("Welcome to supermarket simulator", 1045, 335);
    text("click \"start\" when you are ready", 1045, 360);
    text("and begin your shopping spree", 1045, 385);
    if (doorsOpening) {
      LDX += (-200 - LDX) * 0.05;
      RDX += (1400 - RDX) * 0.05;
      if (LDX < -150 && RDX > 1350) { doorsOpening = false; Start(); }
    }
    return;
  }

  if (scene === 2) {
    background(235, 183, 186);
    textAlign(CENTER, CENTER); fill(0); textFont(receiptFont);
    textSize(28); text("Your total CO2: " + finalCO2.toFixed(2) + " kg", width/2, height/2 - 120);
    textSize(18); text(getFact(finalCO2), width/2, height/2 - 70);
    return;
  }

  background(250, 220, 230);
  image(extraStone, 600, 302, 1200, 600);
  image(backbackground, 600, 275, 1200, 550);
  image(shelfbasketbackground, 600, 275, 1200, 550);
  image(wares, 600, 275, 1200, 550);

  // Receipt
  const rX = 970, rTopY = 10, rW = 230, rH = 500;
  const rL = 1006, rR = 1160;
  fill(246, 236, 215, 0); rect(rX, rTopY, rW, rH);
  image(paperTexture, rX + rW/2, rTopY + rH/2, rW + 210, rH + 20);
  fill(0); textSize(20); textAlign(CENTER); textFont(receiptFont);
  text("CO2 SHOPPING", rX + rW/2, 92);

  let totalCO2 = 0, rY = RECEIPT_Y0;
  textSize(14);
  strokeWeight(0.5);
  drawingContext.setLineDash([3,3]);
  drawingContext.beginPath(); drawingContext.moveTo(rL, rY-20); drawingContext.lineTo(rR, rY-20); drawingContext.stroke();
  drawingContext.setLineDash([]);

  drawingContext.save();
  drawingContext.beginPath(); drawingContext.rect(rX, rTopY+100, rW, 290); drawingContext.clip();
  for (let i = 0; i < clickedGrocery.length; i++) {
    let item = clickedGrocery[i], iY = rY - scrollOffset;
    fill(150); textAlign(LEFT); image(xImg, rL, iY-3, 15, 15);
    fill(0); textAlign(LEFT); text(item.itemName, rL+10, iY);
    textAlign(RIGHT); text(item.CO2 + " kg", rR, iY);
    totalCO2 += item.CO2; rY += ROW_H;
  }
  drawingContext.restore();

  let total = clickedGrocery.length;
  let maxScroll = max(0, (total - MAX_VIS) * ROW_H);
  if (total > MAX_VIS) {
    let sX = rX + rW - 32, sTop = rTopY + 105, sH = 286, sW = 5;
    fill(230); noStroke(); rect(sX, sTop, sW, sH, 2);
    let tH = map(MAX_VIS, 0, total, 0, sH);
    let tY = map(scrollOffset, 0, maxScroll, sTop, sTop + sH - tH);
    fill(120); rect(sX, tY, sW, tH, 4);
  }

  cracking(totalCO2);

  // Music logic
  if (soundOn) {
    if (totalCO2 >= 15) {
      if (currentSong !== sadSong) { if (currentSong) currentSong.stop(); sadSong.loop(); currentSong = sadSong; }
    } else if (totalCO2 >= 5) {
      if (currentSong !== backgroundSong) { if (currentSong) currentSong.stop(); backgroundSong.loop(); currentSong = backgroundSong; }
      backgroundSong.rate(totalCO2 >= 10 ? 0.5 : 1); backgroundSong.setVolume(0.6);
    } else {
      if (currentSong !== backgroundSong) { if (currentSong) currentSong.stop(); backgroundSong.loop(); currentSong = backgroundSong; }
      backgroundSong.rate(1); backgroundSong.setVolume(0.5);
    }
  }

  // Plants
  let ps = totalCO2 > 20 ? 3 : totalCO2 > 10 ? 2 : 1;
  image(window['plant1_' + ps], 440, 50, 100, 120);
  image(window['plant2_' + ps], 515, 45, 110, 130);
  image(window['plant3_' + ps], 790, 35, 100, 150);
  image(window['plant4_' + ps], 870, 75, 110, 110);
  image(saleSign, 480, 92, 75, 40);
  image(saleSign, 823, 92, 75, 40);

  if (clickedGrocery.length > 0) {
    let tY = rTopY + 410;
    strokeWeight(0.5); drawingContext.setLineDash([3,3]);
    drawingContext.beginPath(); drawingContext.moveTo(rL, tY-20); drawingContext.lineTo(rR, tY-20); drawingContext.stroke();
    drawingContext.setLineDash([]);
    textSize(16); fill(0);
    textAlign(LEFT); text("TOTAL", rL, tY);
    textAlign(RIGHT); text(totalCO2.toFixed(2) + " CO2 KG", rR, tY);
    textAlign(LEFT);
  }

  for (let i = 0; i < groceryList.length; i++) groceryList[i].displayGrocery();

  // Hover detection
  let anyhover = groceryList.some(g => g.isHovering())
    || (mouseX > 20 && mouseX < 60 && mouseY > 545 && mouseY < 575)
    || (mouseX > 75 && mouseX < 115 && mouseY > 545 && mouseY < 575);
  let cY2 = RECEIPT_Y0;
  for (let i = 0; i < clickedGrocery.length && !anyhover; i++) {
    let iY = cY2 - scrollOffset;
    if (mouseX > 988 && mouseX < 1013 && mouseY > iY-14 && mouseY < iY+5) anyhover = true;
    cY2 += ROW_H;
  }
  cursor(anyhover ? HAND : ARROW);

  image(frontbackground, 600, 275, 1200, 550);

  for (let i = returningGrocery.length - 1; i >= 0; i--) {
    returningGrocery[i].displayClickedGrocery();
    if (dist(returningGrocery[i].x, returningGrocery[i].y, returningGrocery[i].originalX, returningGrocery[i].originalY) < 5) {
      returningGrocery[i].isMoving = false;
      groceryList.push(returningGrocery[i]);
      returningGrocery.splice(i, 1);
    }
  }

  for (let i = 0; i < groceryList.length; i++) {
    if (groceryList[i].isClicked()) {
      let item = groceryList[i];
      item.targetX = random(550, 653); item.targetY = random(460, 530); item.isMoving = true;
      clickedGrocery.push(item); groceryList.splice(i, 1);
      let r = item.CO2 <= 1 ? 1 : item.CO2 <= 3 ? 0.7 : 0.5;
      basketSound.setVolume(item.CO2 > 3 ? 0.5 : 0.3); basketSound.rate(r); basketSound.play();
    }
  }

  image(piCartBack, 600, 500, 270, 170);
  image(frontbaguettebasket, 600, 275, 1200, 550);
  for (let i = 0; i < clickedGrocery.length; i++) clickedGrocery[i].displayClickedGrocery();
  image(piCartFront, 595, 540, 220, 120);

  strokeWeight(0); fill(255);
  circle(95, 562, 40); circle(40, 560, 40);
  image(soundOn ? sound : noSound, 40, 560, 35, 35);
  image(restartImg, 95, 562, 27, 27);
}

function mousePressed() {
  if (mouseX > 20 && mouseX < 60 && mouseY > 545 && mouseY < 575) {
    soundOn = !soundOn;
    if (!soundOn && currentSong) { currentSong.stop(); currentSong = 0; }
  }
  if (mouseX > 75 && mouseX < 115 && mouseY > 545 && mouseY < 575) Restarting();

  let rY = RECEIPT_Y0;
  for (let i = 0; i < clickedGrocery.length; i++) {
    let iY = rY - scrollOffset;
    if (mouseX > 988 && mouseX < 1013 && mouseY > iY-14 && mouseY < iY+5) {
      let item = clickedGrocery[i];
      item.targetX = item.originalX; item.targetY = item.originalY; item.isMoving = true;
      putBackSound.play(); returningGrocery.push(item); clickedGrocery.splice(i, 1);
      break;
    }
    rY += ROW_H;
  }
}

function cracking(co2) {
  if (co2 <= 0) return;
  tint(255, constrain((co2 / 15) * 255, 0, 255));
  image(cracksExtra, 600, 315); image(cracks, 600, 275);
  noTint();
}

function mouseWheel(event) {
  if (mouseX > 960 && mouseX < 1200 && mouseY > 10 && mouseY < 510) {
    let maxScroll = max(0, (clickedGrocery.length - MAX_VIS) * ROW_H);
    scrollOffset = constrain(scrollOffset + event.delta * 0.5, 0, maxScroll);
    return false;
  }
}

function handleCheckout() { checkoutSound.setVolume(0.3); checkoutSound.play(); End(); }
function Starting() { startSound.setVolume(0.3); startSound.play(); doorsOpening = true; }
function Restarting() { restartSound.setVolume(0.3); restartSound.play(); window.setTimeout(() => location.reload(), 800); }
function Start() { scene = 1; button1.hide(); button2.show(); button3.hide(); }
function End() {
  finalCO2 = clickedGrocery.reduce((s, i) => s + i.CO2, 0);
  scene = 2; button2.hide(); button1.hide(); button3.show();
}