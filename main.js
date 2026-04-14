//Set variables here
let returningGrocery = []; // deleted groceries goes from "cliked" to "returning" (and lastly back to "groceryList")
let groceryList = [];
let clickedGrocery = [];
let tintValue;




let soundOn = true;


function preload() { // For loading before program is run
	// cart and background
	piCartBack = loadImage('./assets/images/pinkcartback.png');
	piCartFront = loadImage('./assets/images/pinkcartfront.png');
	backbackground = loadImage('./assets/images/backbackground.png');
	extraStone = loadImage('./assets/images/extraStone.png');
	frontbackground = loadImage('./assets/images/frontbackground.png');
	shelfbasketbackground = loadImage('./assets/images/shelfbasket.png');
	frontbaguettebasket = loadImage('./assets/images/frontbreadbasket.png');
	xImg = loadImage('./assets/images/x.png');
	wares = loadImage('./assets/images/wares.png');

	//Plants
	plant1_1 = loadImage('./assets/images/plants/plant1_1.png');
	plant1_2 = loadImage('./assets/images/plants/plant1_2.png');
	plant1_3 = loadImage('./assets/images/plants/plant1_3.png');
	plant2_1 = loadImage('./assets/images/plants/plant2_1.png');
	plant2_2 = loadImage('./assets/images/plants/plant2_2.png');
	plant2_3 = loadImage('./assets/images/plants/plant2_3.png');
	plant3_1 = loadImage('./assets/images/plants/plant3_1.png');
	plant3_2 = loadImage('./assets/images/plants/plant3_2.png');
	plant3_3 = loadImage('./assets/images/plants/plant3_3.png');
	plant4_1 = loadImage('./assets/images/plants/plant4_1.png');
	plant4_2 = loadImage('./assets/images/plants/plant4_2.png');
	plant4_3 = loadImage('./assets/images/plants/plant4_3.png');

	// This is our Cracks
	cracks = loadImage('./assets/images/cracks.png');
	cracksExtra = loadImage('./assets/images/cracksExtra.png');

	// All the images to our groceries
	appleImg = loadImage('./assets/images/apple.png');
	avocadoImg = loadImage('./assets/images/avocado.png');
	bananaImg = loadImage('./assets/images/banana.png');
	cucumberImg = loadImage('./assets/images/cucumber.png');
	carrotImg = loadImage('./assets/images/carrot.png');
	watermelonImg = loadImage('./assets/images/watermelon.png');
	waterImg = loadImage('./assets/images/water.png');
	wineImg = loadImage('./assets/images/wine.png');
	ryebreadImg = loadImage('./assets/images/rugbr.png');
	baguetteImg = loadImage('./assets/images/baguette.png');
	toastImg = loadImage('./assets/images/toast.png');
	beerImg = loadImage('./assets/images/beer.png');
	cookiesImg = loadImage('./assets/images/cookie.png');
	milkImg = loadImage('./assets/images/milk.png');
	oatMilkImg = loadImage('./assets/images/oatmilk.png');
	sodaImg = loadImage('./assets/images/soda.png');
	chickenImg = loadImage('./assets/images/chicken.png');
	eggsImg = loadImage('./assets/images/eggs.png');
	cheeseImg = loadImage('./assets/images/cheese.png');
	chipsImg = loadImage('./assets/images/chips.png');

	nutellaImg = loadImage('./assets/images/nutella.png');
	flowersImg = loadImage('./assets/images/flowers.png');
	oreoImg = loadImage('./assets/images/oreo.png');
	ramenImg = loadImage('./assets/images/ramen.png');
	cornflakesImg = loadImage('./assets/images/cornflakes.png');

	// restart
	restartImg = loadImage('./assets/images/restart.png');

	// font and receipt texture
	receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');
	paperTexture = loadImage('./assets/images/paperTexture.png');

	// sound pictures
	sound = loadImage('./assets/images/sound.png')
	noSound = loadImage('./assets/images/noSound.png')

	// sounds and music
	backgroundSong = loadSound('assets/sounds/backgroundMusic.mp3');
	basketSound = loadSound('assets/sounds/basket.mp3');
	// sadSong = loadSound('assets/sounds/sadMusic.wav')
}

function setup() {
	let canvas = createCanvas(1200, 600);
	// x and y are being used for positioning the canvas in the middle of the screen.
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;

	// let offset = 75; // offset is adjustable value that moves the canvas up or down.

	canvas.position(x, y); // positions the canvas in the middle of the screen, minus the y-offset.


	frameRate(60); //framerate
	strokeWeight(0); // size of frame of object
	imageMode(CENTER);// placing images by their center instead of corner

	// All our objects are defined as groceries

	// CHANGES TO COME;
	// str er forkert
	//dimensioner er forkert
	// placering er forkert

	apple = new Grocery(330, 390, 60, 60, appleImg, 0.61, "Apple");
	banana = new Grocery(470, 290, 80, 60, bananaImg, 1.02, "Banana");
	avocado = new Grocery(340, 300, 70, 50, avocadoImg, 0.73, "Avocado");
	cucumber = new Grocery(550, 395, 100, 50, cucumberImg, 0.14, "Cucumber");
	carrot = new Grocery(690, 290, 110, 70, carrotImg, 0.27, "Carrot");
	watermelon = new Grocery(800, 400, 100, 100, watermelonImg, 1.2, "Watermelon");
	water = new Grocery(77, 99, 30, 70, waterImg, 0.28, "Water");
	wine = new Grocery(323, 70, 25, 82, wineImg, 1.24, "Wine");
	ryebread = new Grocery(400, 168, 90, 50, ryebreadImg, 1.02, "Ryebread");
	baguette = new Grocery(225, 350, 60, 160, baguetteImg, 0.81, "Baguette");
	toast = new Grocery(650, 165, 60, 70, toastImg, 0.81, "Toast");
	beer = new Grocery(180, 100, 40, 65, beerImg, 0.22, "Beer");
	cookies = new Grocery(820, 180, 90, 40, cookiesImg, 0.73, "Cookies");
	milk = new Grocery(100, 162, 40, 70, milkImg, 0.50, "Milk");
	oatMilk = new Grocery(160, 165, 40, 70, oatMilkImg, 0.40, "Oatmilk");
	soda = new Grocery(130, 97, 40, 70, sodaImg, 0.88, "Soda");
	chicken = new Grocery(100, 235, 60, 70, chickenImg, 4.91, "Chicken");
	eggs = new Grocery(170, 240, 50, 50, eggsImg, 0.58, "Eggs");
	cheese = new Grocery(103, 317, 50, 50, cheeseImg, 1.08, "Cheese");
	chips = new Grocery(800, 240, 60, 60, chipsImg, 0.74, "Chips");
	nutella = new Grocery(480, 240, 50, 60, nutellaImg, 1.57, "Nutella");
	flowers = new Grocery(640, 82, 110, 70, flowersImg, 10.4, "Flowers");
	oreo = new Grocery(350, 250, 80, 35, oreoImg, 4.7, "Oreo");
	ramen = new Grocery(540, 170, 60, 60, ramenImg, 0.65, "Ramen");
	cornflakes = new Grocery(630, 240, 60, 70, cornflakesImg, 1.74, "Cornflakes");


	// Lige nu pusher jeg manuelt vores frugter, indtil bedre løsning
	groceryList.push(nutella, flowers, oreo, ramen, cornflakes, chips, cheese, eggs, chicken, soda, oatMilk, milk, cookies, beer, banana, avocado, cucumber, carrot, watermelon, apple, water, wine, ryebread, baguette, toast);
	console.log("Grocery list; " + groceryList.length + " objects"); // Debugging



}

function draw() {
	background(250, 220, 230);
	image(extraStone, 1200 / 2, (575 / 2) + 27.5, 1200, 600);
	image(backbackground, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center
	image(shelfbasketbackground, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center
	image(wares, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center


	//Making x and y appear on the canvas when hovering
	textSize(16);
	fill(0);
	text('x =' + round(mouseX), 30, 33);
	text('y =' + round(mouseY), 30, 53);
	strokeWeight(0);

	let anyhover = false; //  Variabel pre made for hover function

	// Receipt box
	let receiptX = 970; // start-position from left  
	let receiptTopY = 10; // start-position from top  
	let receiptW = 230;  // width 
	let receiptH = 500;  // height 

	fill(246, 236, 215, 0); // (Makes the rect behind the receipt transparent. 0 = alpha)
	rect(receiptX, receiptTopY, receiptW, receiptH); // den usynlige boks der definerer kvitteringens område
	image(paperTexture, receiptX + receiptW / 2, receiptTopY + receiptH / 2, receiptW + 210, receiptH + 20);
	// paperTexture placed in the middle of the box (hence: + width/2 og + height/2)
	// de sidste to tal er størrelsen sat til receiptW og receiptH så den passer præcis


	// Reeipt, title
	fill(0);
	textSize(20);
	textAlign(CENTER); // Aligned by center
	textFont(receiptFont);
	text("CO2 SHOPPING", receiptX + receiptW / 2, 100);

	/* 
	På kvitteringen vises CO2 for hver vare i clickedGrocery arrayet. Derefter beregnes total
	textAlign der skifter fra left and right er for at give kvitterings layoutet
	*/

	let totalCO2 = 0; // starting Co2 value
	let receiptY = 130; // startposition for tekst på kvitteringen fra toppen
	let receiptLeft = 1006; // x-position for venstre tekst (varenavne)
	let receiptRight = 1160; // x-position for højre tekst (CO2-værdier)

	textSize(14);



	// streg 1 (under titel)
	// drawingContext bruges for at "unlock" en stribet-linje funktion p5 ikke selv har 
	strokeWeight(0.5);
	drawingContext.setLineDash([3, 3]); // længde på streg, længde på mellemrum
	line(receiptLeft, receiptY - 20, receiptRight, receiptY - 20);

	/* 
	Below is a for-loop that goes through all products in the "clickedGrocery" array.
	For each product, itemName is written on the left side (itemName is what I called the product name in the class),
	and to keep the receipt style, the "price" is placed on the right side,
	which in this case is the product's CO2 value (as it is called in the class), followed by "kg".

	totalCO2 is continuously updated for every product added to the "clickedGrocery" array,
	and receiptY is moved 25 pixels down so the next item is placed on a new line.
	*/


	for (let i = 0; i < clickedGrocery.length; i++) {
		let item = clickedGrocery[i];

		// For each "clicked grocery" an X is drawn to delete item + write product name + co2 number
		fill(150);
		textAlign(LEFT);
		image(xImg, receiptLeft, receiptY - 3, 15, 15);
		fill(0);

		textAlign(LEFT);
		text(item.itemName, receiptLeft + 10, receiptY); // +12 for more space betweeen x and item name

		textAlign(RIGHT);
		text(item.CO2 + " kg", receiptRight, receiptY);

		totalCO2 += item.CO2; // læg varens CO2 til totalen
		receiptY += 25; // rykker x antal pixel ned for hver tilføjet item 
	}
	cracking(totalCO2); // function for updating the CO2

	if (totalCO2 > 10 && totalCO2 < 20) { // Dying plant if CO2 is between 10 and 20
		image(plant1_2, 440, 50, 100, 120);
		image(plant2_2, 515, 45, 110, 130);
		image(plant3_2, 790, 35, 100, 150);
		image(plant4_2, 870, 75, 110, 110);

	} else if (totalCO2 > 20) { // Dead plant if CO2 is higher than 20
		image(plant1_3, 440, 50, 100, 120);
		image(plant2_3, 515, 45, 110, 130);
		image(plant3_3, 790, 35, 100, 150);
		image(plant4_3, 870, 75, 110, 110);

	} else { // Our healthy plants if CO2 is less than 10
		image(plant1_1, 440, 50, 100, 120);
		image(plant2_1, 515, 45, 110, 130);
		image(plant3_1, 790, 35, 100, 150);
		image(plant4_1, 870, 75, 110, 110);
	}

	if (clickedGrocery.length > 0) { // Only show total if min. 1 item in the basket 

		// streg 2 (over total)
		strokeWeight(0.5);
		drawingContext.setLineDash([3, 3]);
		line(receiptLeft, receiptY - 10, receiptRight, receiptY - 10);
		drawingContext.setLineDash([]);

		receiptY += 15; // extra space before the total 
		textSize(16); // make total bigger than items

		textAlign(LEFT);
		text("TOTAL", receiptLeft, receiptY);

		textAlign(RIGHT);
		// text(totalCO2.toFixed(2), receiptRight, receiptY);  // toFixed(2) runder af til 2 decimaler
		text(totalCO2.toFixed(2) + " CO2 KG", receiptRight, receiptY);
	}

	textAlign(LEFT);

	tintValue = map(totalCO2, 0, 15, 0, 255);
	//console.log(tintValue); //debugging
	// Debugging for now
	push();
	strokeWeight(0);
	fill(84, 74, 63, tintValue);
	circle(320, 20, 50);
	pop();




	/*
	Går igennem arrayet med vores groceries
	For hver af elementerne i vores array kalder den i vores Grocery Class
	For hver af de elementer tager den informationerne i Display functionen i Class.js
	Den placerer så alle billederne.
	*/
	for (let i = 0; i < groceryList.length; i++) {
		groceryList[i].displayGrocery();

	}

	/*
	 isHovering funktionen handler om at den tager true/false fra "anyhover",
	 hvor den tjekker om den hover over en af objekterne, og returner true hvis hover, 
	 false hvis ikke hover. 
	 så den automatisk ændrer cursor state når man hover sin mus over en af objekterne.
	*/

	for (let i = 0; i < groceryList.length; i++) {
		if (groceryList[i].isHovering()) {
			anyhover = true;
		}
	}
	if (anyhover === true) {
		cursor(HAND);
	} else {
		cursor(ARROW);
	}




	//front of cart - skal være foran grocerylist display

	image(frontbackground, 1200 / 2, 550 / 2, 1200, 550);
	/* 
	Backwards loop. We loop backwards because removing an item shifts the remaining elements.
	If we looped forwards, the next element could move into the current index and be skipped by the loop.
	Take item i in returningGrocery and run displayClickedGrocery (as defined in Class.js). It's the easing.
	Draw the item and move it closer to its orignal position. 
	Dist = if the item is less than 5 pixels from original position count is as "arrived home" then...
	...the animation stop and the product will be added back to "GroceryList" and removed from "returningGrocery"
	Items on their way back gets drawn on top of everything becuase this bit is late in draw()
	*/

	for (let i = returningGrocery.length - 1; i >= 0; i--) {
		returningGrocery[i].displayClickedGrocery();
		if (dist(returningGrocery[i].x, returningGrocery[i].y, returningGrocery[i].originalX, returningGrocery[i].originalY) < 5) {
			returningGrocery[i].isMoving = false;
			groceryList.push(returningGrocery[i]);
			returningGrocery.splice(i, 1);
		}
	}

	//Hvis et objekt klikkes på bliver det pushet fra et array ind i et andet array.
	for (let i = 0; i < groceryList.length; i++) {

		if (groceryList[i].isClicked()) {
			console.log("Clicked!"); //debugging
			let item = groceryList[i]; // Vi gemmer objektet som blev klikket

			// X og Y koordinator for at produkterne kan være inde i kurven.
			item.targetX = random(550, 653);
			item.targetY = random(460, 530);
			item.isMoving = true;

			basketSound.setVolume(0.3); // Lyd! Den går fra 0-1
			basketSound.play(); // play sound when item is clicked
			// så flytter vi objektet fra groceryList til clickedGrocery, som er når de er i kurven.


			clickedGrocery.push(groceryList[i]); // Push clicked object to different array
			groceryList.splice(i, 1); // This takes the i placement in our array and removes 1 element, which is the i spot

		} else {
			//console.log("No work!"); //debugging
		}

	}

	//cart back 
	image(piCartBack, 600, 500, 270, 170);
	image(frontbaguettebasket, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center

	// Denne displayer vores clickedGrocery array i stedet for originale groceryList
	for (let i = 0; i < clickedGrocery.length; i++) {
		clickedGrocery[i].displayClickedGrocery();
	}

	//front of cart, always at the end
	image(piCartFront, 595, 540, 220, 120);

	strokeWeight(0);
	fill(255, 255, 255);
	circle(95, 562, 40);
	circle(40, 560, 40);

	// images for sound on/off image
	if (soundOn) {
		image(noSound, 40, 560, 40, 40);
	} else {
		image(sound, 40, 560, 40, 40);
	}
	image(restartImg, 95, 562, 30, 30); // restart button


}



function mousePressed() {

	// here we check if the mouse is clicking on the x and y positions, where the image is
	if (
		mouseX > 20 && mouseX < 60 &&
		mouseY > 545 && mouseY < 575
	) { // if we click on sound, it will turn to noSound image and vice versa
		if (soundOn == true) {
			soundOn = false;
		} else {
			soundOn = true;
		}
		{ // plays music and when clicked on mute button stops

			if (backgroundSong.isPlaying()) {
				backgroundSong.pause();
			} else {
				backgroundSong.setVolume(0.5);
				backgroundSong.play();

			}
		}
	}
	let receiptY = 130;
	for (let i = 0; i < clickedGrocery.length; i++) {

		//  Hard coding - if clicked here (the x) remove item from receipt
		if (
			mouseX > 988 && mouseX < 1013 &&
			mouseY > receiptY - 14 &&
			mouseY < receiptY + 5) {


			let item = clickedGrocery[i];
			item.targetX = item.originalX;
			item.targetY = item.originalY;
			item.isMoving = true;
			// groceryList.push(item); // Må jeg slette? Er ikke relevant efter ny kode til easing back
			returningGrocery.push(item);
			clickedGrocery.splice(i, 1); // See it as: array.splice(startIndex, amountToBeRemoved = 1)
			break;
		}
		receiptY += 25;
	}
}
// a function for the background having cracks after 4 and 6 kg of CO2
function cracking(totalCO2) {
	if (totalCO2 >= 4) {
		image(cracksExtra, 1200 / 2, (575 / 2) + 27.5, 1200, 550);
		image(cracks, 1200 / 2, 550 / 2, 1200, 550);
		// sadSong.setVolume(0.3);
		// sadSong.play();
		// backgroundSong.pause();
	}

}

