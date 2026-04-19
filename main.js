//Set variables here
let returningGrocery = []; // deleted groceries goes from "cliked" to "returning" (and lastly back to "groceryList")
let groceryList = [];
let clickedGrocery = [];
let tintValue;



let backgroundSong;
let basketSound;
let soundOn = false;
let currentSong = 0; // Keeps track of the song that is currently playing, 0 means no song yet
let scene = 0;



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
	basketSound = loadSound('assets/sounds/basket.mp3');
	backgroundSong = loadSound('assets/sounds/backgroundMusic.mp3');
	sadSong = loadSound('assets/sounds/sadMusic.mp3');

	
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

	apple = new Grocery(750, 300, 60, 60, appleImg, 0.61, "Apple");
	banana = new Grocery(550, 386, 80, 60, bananaImg, 1.02, "Banana");
	avocado = new Grocery(610, 310, 70, 50, avocadoImg, 0.73, "Avocado");
	cucumber = new Grocery(440, 310, 120, 50, cucumberImg, 0.14, "Cucumber");
	carrot = new Grocery(340, 380, 120, 90, carrotImg, 0.27, "Carrot");
	watermelon = new Grocery(722, 400, 90, 90, watermelonImg, 1.2, "Watermelon");
	water = new Grocery(77, 99, 30, 70, waterImg, 0.28, "Water");
	wine = new Grocery(330, 60, 32, 100, wineImg, 1.24, "Wine");
	ryebread = new Grocery(425, 177, 98, 50, ryebreadImg, 1.02, "Ryebread");
	baguette = new Grocery(225, 350, 60, 160, baguetteImg, 0.81, "Baguette");
	toast = new Grocery(540, 173, 60, 70, toastImg, 0.81, "Toast");
	beer = new Grocery(180, 100, 40, 65, beerImg, 0.22, "Beer");
	cookies = new Grocery(610, 255, 95, 45, cookiesImg, 0.73, "Cookies");
	milk = new Grocery(102, 170, 33, 55, milkImg, 0.50, "Milk");
	oatMilk = new Grocery(168, 168, 35, 59, oatMilkImg, 0.40, "Oatmilk");
	soda = new Grocery(130, 97, 40, 70, sodaImg, 0.88, "Soda");
	chicken = new Grocery(185, 240, 55, 65, chickenImg, 4.91, "Chicken");
	eggs = new Grocery(150, 370, 55, 55, eggsImg, 0.58, "Eggs");
	cheese = new Grocery(150, 317, 60, 60, cheeseImg, 1.08, "Cheese");
	chips = new Grocery(850, 250, 57, 60, chipsImg, 0.74, "Chips");
	nutella = new Grocery(732, 250, 50, 60, nutellaImg, 1.57, "Nutella");
	flowers = new Grocery(690, 82, 110, 70, flowersImg, 10.4, "Flowers");
	oreo = new Grocery(420, 260, 83, 34, oreoImg, 4.7, "Oreo");
	ramen = new Grocery(850, 180, 53, 53, ramenImg, 0.65, "Ramen");
	cornflakes = new Grocery(680, 173, 63, 73, cornflakesImg, 1.74, "Cornflakes");


	// Our grocery objects are pushed into an array
	groceryList.push(nutella, flowers, oreo, ramen, cornflakes, chips, cheese, eggs, chicken, soda, oatMilk, milk, cookies, beer, banana, avocado, cucumber, carrot, watermelon, apple, water, wine, ryebread, baguette, toast);
	console.log("Grocery list; " + groceryList.length + " objects"); // Debugging


	button1 = createButton('Start');
	button1.mousePressed(Start);
	button1.position(width / 2 - 30, height / 2 - 10);

	button2 = createButton('Checkout');
	button2.mousePressed(End);
	button2.position(300, 300);
	button2.hide();

	button3 = createButton('Restart');
	button3.mousePressed(Beginning);
	button3.position(300, 350);
	button3.hide();

}

function draw() {
	if (scene == 0) {
		background(235, 183, 186);
		fill(0,0,0);
		text("Welcome", 1200/2, 200);
		return;
	} 

	if (scene == 2) {
		background(235, 183, 186);
		fill(0,0,0);
		text("End", 1200/2, 200);
		return;
	} 
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
	// the last two nr are the size put to receiptW and receipt H so it fits perfectly



	// Reeipt, title
	fill(0);
	textSize(20);
	textAlign(CENTER); // Aligned by center
	textFont(receiptFont);
	text("CO2 SHOPPING", receiptX + receiptW / 2, 100);

	/* 
	On the receipt it shows the Co2 for each grocery in clickedGrocery array. Then the full 
	amount i calculcated. Textalign changes are to make the layout of receipt
	*/

	let totalCO2 = 0; // starting Co2 value
	let receiptY = 130; //startposition for text on the receipt
	let receiptLeft = 1006; // x-position for left text (grocery names)
	let receiptRight = 1160; // x-position for right text (CO2)

	textSize(14);



	// line 1 (under titel)
	// drawingContext used to unlock a dotted line 
	strokeWeight(0.5);
	drawingContext.setLineDash([3, 3]); //length of line and length of blank space
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

		totalCO2 += item.CO2; // add the grocerys CO2 to the total
		receiptY += 25; //Goes x amount of pixel down per added item 
	}
	cracking(totalCO2); // function for updating the CO2
	
	/* If sound is on and CO2 is above or equal 4, switch to sad music (only if it's not already playing) 
	and stop the previous song */
	if (soundOn) {
		if (totalCO2 >= 4) {
		  if (currentSong !== sadSong) {
			if (currentSong) currentSong.stop();
			sadSong.setVolume(0.5);
			sadSong.loop();
			currentSong = sadSong;
		  }
		} else { // we do the same for the background song
		  if (currentSong !== backgroundSong) {
			if (currentSong) currentSong.stop();
			backgroundSong.setVolume(0.5);
			backgroundSong.loop();
			currentSong = backgroundSong;
		  }
		}
	  }

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

		// line 2 (over total)
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
	Goes through our grocery array
	For each element of the array it places its attached image.
	*/
	for (let i = 0; i < groceryList.length; i++) {
		groceryList[i].displayGrocery();

	}

	/*
	isHovering is taking true/false from "anyhover",
	where it checks if it hovers one of the objects.
	True if hover, false if not. Then changes cursor if true
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




	//front of cart - has to be in front of grocery display

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

	//If an object is clicked, its pushed to a different array
	for (let i = 0; i < groceryList.length; i++) {

		if (groceryList[i].isClicked()) {
			console.log("Clicked!"); //debugging
			let item = groceryList[i]; // Save the clicked object

			// X and Y for within the basket
			item.targetX = random(550, 653);
			item.targetY = random(460, 530);
			item.isMoving = true;

			basketSound.setVolume(0.3); // Sound volume, goes from 0-1
			basketSound.play(); // play sound when item is clicked
			// 
			
			clickedGrocery.push(groceryList[i]); // Push clicked object to different array
			groceryList.splice(i, 1); // This takes the i placement in our array and removes 1 element, which is the i spot

		} else {
			//console.log("No work!"); //debugging
		}

	}

	//cart back 
	image(piCartBack, 600, 500, 270, 170);
	image(frontbaguettebasket, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center

	// this displays our clickedGrocery array 
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
		image(sound, 40, 560, 40, 40);
	  } else {
		image(noSound, 40, 560, 40, 40);
	  }
	image(restartImg, 95, 562, 30, 30); // restart button


}



function mousePressed() {

	// here we check if the mouse is clicking on the x and y positions, where the image is
	if (mouseX > 20 && mouseX < 60 && mouseY > 545 && mouseY < 575) {
		soundOn = !soundOn;
	  // Turns sound on/off when clicking the icon, if sound is turned off, stop the current music and reset it
		if (!soundOn) {
		  if (currentSong) currentSong.stop();
		  currentSong = 0; // 
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
// a function for the background having cracks after increasing in CO2
function cracking(totalCO2) {

  // working with opacity of cracks image, not working yet.
	// let alphaValue = map(totalCO2, 4, 20, 0, 255);
	// tint(255, alphaValue);
	// image(cracks, 1200 / 2, 550 / 2, 1200, 550);
  }


  function Beginning(){
	scene = 0;
	button2.hide();
	button3.hide();
	button1.show();
  }

  function Start(){
		scene = 1;
		button1.hide();
		button2.show();
		button3.hide();
	
  }


  function End(){
		scene = 2;
		button2.hide();
		button1.hide();
		button3.show();
	
  }


