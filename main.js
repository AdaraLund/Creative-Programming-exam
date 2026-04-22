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

let scrollOffset = 0;
let maxVisible = 9;
const RECEIPT_ROW_SPACING = 30;
const RECEIPT_START_Y = 130;


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
	frameImg = loadImage('./assets/images/frame.png');

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
	notforsale = loadImage('./assets/images/plants/notforsale.png');

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

	/* This is a HTML element on top of canvas to create a frame outside the canvas
	without having to change all of our hardcoding */
	let frameDiv = createElement('div'); // Creates an empty HTML box element called frameDiv

	// Styling the HTML div "box"
		frameDiv.style('position', 'fixed'); // Locks the box to the browser window so it doesn't scroll

		/*
		top: 50% and left: 50% place the corner of the box in the middle. 
		But we want the middle of the box in the middle. 
		So the 'transform' moves the box back half a step
		so the middle of the box is in the middle of the screen.
		*/ 
		frameDiv.style('top', '50%');      
		frameDiv.style('left', '50%');     
		frameDiv.style('transform', 'translate(-50%, -50%)'); 

		// We make the box a little larger than the canvas (1200x600) so that the frame extends on all sides.
		frameDiv.style('width', '1610px');  
		frameDiv.style('height', '810px');   

		frameDiv.style('background-image', 'url(./assets/images/frame.png)'); // Sets our frame image as the background of the HTML box
		frameDiv.style('background-size', '100% 100%'); // Stretches the frame image to fill the box
		frameDiv.style('pointer-events', 'none'); // This lets you click "through" the picture



	let canvas = createCanvas(1200, 600);
	/* SLETTET IFBM FRAME
	These lines manually calculated where the canvas should be placed. Now CSS do the centering automatically 
	*/

	// x and y are being used for positioning the canvas in the middle of the screen.
	// let x = (windowWidth - width) / 2;
	// let y = (windowHeight - height) / 2;
	// canvas.position(x, y); // positions the canvas in the middle of the screen, minus the y-offset.

	
	// let offset = 75; // offset is adjustable value that moves the canvas up or down.

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
	nutella = new Grocery(732, 250, 50, 60, nutellaImg, 3.1, "Nutella");
	flowers = new Grocery(690, 82, 110, 70, flowersImg, 1.67, "Flowers");
	oreo = new Grocery(420, 260, 83, 34, oreoImg, 0.44, "Oreo");
	ramen = new Grocery(850, 180, 53, 53, ramenImg, 0.14, "Ramen");
	cornflakes = new Grocery(680, 173, 63, 73, cornflakesImg, 1.22, "Cornflakes");


	// Our grocery objects are pushed into an array
	groceryList.push(nutella, flowers, oreo, ramen, cornflakes, chips, cheese, eggs, chicken, soda, oatMilk, milk, cookies, beer, banana, avocado, cucumber, carrot, watermelon, apple, water, wine, ryebread, baguette, toast);
	console.log("Grocery list; " + groceryList.length + " objects"); // Debugging


	// start button
	button1 = createButton('Start');
	button1.mousePressed(Start);
	button1.position(750, 540);
	button1.style("font-family", "Special Elite");
	button1.style("font-size", "24px");
	button1.style("padding", "5px 20px");
	button1.style("background-color", "white");
	button1.style("color", "black");
	button1.style("border-radius", "5px");
	button1.style("cursor", "pointer");

	// Checkout button
	button2 = createButton('Checkout');
	button2.mousePressed(End);
	button2.position(1220, 695);
	button2.hide();
	button2.style("font-family", "Special Elite");
	button2.style("font-size", "19px");
	button2.style("padding", "7px 17px");
	button2.style("background-color", "white");
	button2.style("color", "black");
	button2.style("border-radius", "5px");
	button2.style("cursor", "pointer");

	// restart button
	button3 = createButton('Restart');
	button3.mousePressed(Beginning);
	button3.position(750, 540);
	button3.hide();
	button3.style("font-family", "Special Elite");
	button3.style("font-size", "24px");
	button3.style("padding", "5px 20px");
	button3.style("background-color", "white");
	button3.style("color", "black");
	button3.style("border-radius", "5px");
	button3.style("cursor", "pointer");

}

function draw() {

	if (scene === 0) {
		background(235, 183, 186);
		textAlign(CENTER, CENTER);
		fill(0, 0, 0);
		textSize(48);
		textFont(receiptFont);
		text("Welcome", width / 2, height / 2 - 80);
		return;
	}

	if (scene === 2) {
		background(235, 183, 186);
		textAlign(CENTER, CENTER);
		fill(0, 0, 0);
		textSize(28);
		textFont(receiptFont);
		text("End, facts and comparison with CO2", width / 2, height / 2 - 80);
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
	rect(receiptX, receiptTopY, receiptW, receiptH); // the invisible box that defines the receipt-area
	image(paperTexture, receiptX + receiptW / 2, receiptTopY + receiptH / 2, receiptW + 210, receiptH + 20);
	// paperTexture placed in the middle of the box (hence: + width/2 og + height/2)
	// the last two nr are the size put to receiptW and receipt H so it fits perfectly



	// Reeipt, title
	fill(0);
	textSize(20);
	textAlign(CENTER); // Aligned by center
	textFont(receiptFont);
	text("CO2 SHOPPING", receiptX + receiptW / 2, 92);

	/* 
	On the receipt it shows the Co2 for each grocery in clickedGrocery array. Then the full 
	amount i calculcated. Textalign changes are to make the layout of receipt
	*/

	let totalCO2 = 0; // starting Co2 value
	let receiptLeft = 1006; // x-position for left text (grocery names)
	let receiptRight = 1160; // x-position for right text (CO2)
	let receiptY = RECEIPT_START_Y; // startposition for text on the receipt

	textSize(14);

	/* 
	DrawingContext is a library for shortcuts, also used other places
	
	line 1 (under title)
	the regular p5: line(receiptLeft, receiptY - 20, receiptRight, receiptY - 20);
	  conflicts with drawingContext.clip(), so we use the 'Canvas 2D API' way to make lines.
	Same for line 2
	 */


	strokeWeight(0.5);
	drawingContext.setLineDash([3, 3]); //length of line and length of blank space
	drawingContext.beginPath();
	drawingContext.moveTo(receiptLeft, receiptY - 20);
	drawingContext.lineTo(receiptRight, receiptY - 20);
	drawingContext.stroke();
	drawingContext.setLineDash([]);


	/* 
	We save the current drawing state so we can restore it later. 
	Then start defining a new shape. (simply required before drawing a clipping area)
	Define the rectangle that will act as the clipping mask.
	Apply the clipping mask (anything drawn outside the rect above will be hidden)
	*/


	drawingContext.save();
	drawingContext.beginPath();
	drawingContext.rect(receiptX, receiptTopY + 100, receiptW, 290);
	drawingContext.clip();

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
		let itemY = receiptY - scrollOffset;   // This moves the item up/down based on position before including what is scrolled

		/*
		For each "clicked grocery" an X is drawn to delete item + write product name + co2 number
		Use itemY instead of receiptY so the row moves when scrolling 
		*/

		fill(150);
		textAlign(LEFT);
		image(xImg, receiptLeft, itemY - 3, 15, 15);
		fill(0);

		textAlign(LEFT);
		text(item.itemName, receiptLeft + 10, itemY);

		textAlign(RIGHT);
		text(item.CO2 + " kg", receiptRight, itemY);

		totalCO2 += item.CO2; // add the grocerys CO2 to the total
		receiptY += RECEIPT_ROW_SPACING; // Goes x amount of pixel down per added item 
	}

	drawingContext.restore();

	let totalItems = clickedGrocery.length;
	let maxScroll = max(0, (totalItems - maxVisible) * RECEIPT_ROW_SPACING); // Maximum distance the list can scroll. 

	if (totalItems > maxVisible) { // says: only show scrollbar if theres more items in basket than space for on receipt

		// Layout of scrollbar
		let scrollbarX = receiptX + receiptW - 32;
		let scrollbarTopY = receiptTopY + 105;
		let scrollbarH = 286;
		let scrollbarW = 5

		fill(230);
		noStroke();
		rect(scrollbarX, scrollbarTopY, scrollbarW, scrollbarH, 2);

		// Layout of the scrollThumb (the movable part of the scrollbar)
		let scrollThumbH = map(maxVisible, 0, totalItems, 0, scrollbarH);
		let scrollThumbY = map(scrollOffset, 0, maxScroll, scrollbarTopY, scrollbarTopY + scrollbarH - scrollThumbH);


		fill(120);
		rect(scrollbarX, scrollThumbY, scrollbarW, scrollThumbH, 4);
	}



	cracking(totalCO2); // function for updating the CO2

	/* If sound is on and CO2 is above or equal 4, switch to sad music (only if it's not already playing) 
	and stop the previous song */
	if (soundOn) {
		if (totalCO2 >= 10) {
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

	image(notforsale, 843, 74, 30, 30);
	image(notforsale, 790, 85, 30, 30);
	image(notforsale, 437, 85, 30, 30);
	image(notforsale, 517, 85, 30, 30);

	if (clickedGrocery.length > 0) { // Only show total if min. 1 item in the basket 
		let totalY = receiptTopY + 410; // Keep total fixed below the scroll area

		// line 2 (over total)
		strokeWeight(0.5);
		drawingContext.setLineDash([3, 3]);
		drawingContext.beginPath();
		drawingContext.moveTo(receiptLeft, totalY - 20);
		drawingContext.lineTo(receiptRight, totalY - 20);
		drawingContext.stroke();
		drawingContext.setLineDash([]);
		// line(receiptLeft, totalY - 15, receiptRight, totalY - 15) 

		textSize(16); // make total bigger than items
		fill(0); // Resets fill. If not here, 'total' text becomes grey

		textAlign(LEFT);
		text("TOTAL", receiptLeft, totalY);
		textAlign(RIGHT);
		text(totalCO2.toFixed(2) + " CO2 KG", receiptRight, totalY)
		textAlign(LEFT);
	}

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
	image(frontbaguettebasket, 1200 / 2, 550 / 2, 1200, 550); // 2 since we place images by center

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
	if (mouseX > 75 && mouseX < 115 && mouseY > 545 && mouseY < 575) {
		location.reload();
	}

	let receiptY = RECEIPT_START_Y;

	for (let i = 0; i < clickedGrocery.length; i++) {
		let itemY = receiptY - scrollOffset;   // Same logic as in draw()

		//  Hard coding - if clicked here (the x) remove item from receipt
		if (
			mouseX > 988 && mouseX < 1013 &&
			mouseY > itemY - 14 &&
			mouseY < itemY + 5) {


			let item = clickedGrocery[i];
			item.targetX = item.originalX;
			item.targetY = item.originalY;
			item.isMoving = true;

			returningGrocery.push(item);
			clickedGrocery.splice(i, 1); // See it as: array.splice(startIndex, amountToBeRemoved = 1)
			break;
		}
		receiptY += RECEIPT_ROW_SPACING;
	}
}
// a function for the background having cracks after 4 and 6 kg of CO2
function cracking(totalCO2) {
	if (totalCO2 >= 4) {
		image(cracksExtra, 1200 / 2, (575 / 2) + 27.5, 1200, 550);
		image(cracks, 1200 / 2, 550 / 2, 1200, 550);
	}
}

function mouseWheel(event) { // a build in p5 function 
	if (mouseX > 960 && mouseX < 1200 &&
		mouseY > 10 && mouseY < 510) {

		let totalItems = clickedGrocery.length;
		let maxScroll = max(0, (totalItems - maxVisible) * RECEIPT_ROW_SPACING); // Calculates how much you can scroll down. 

		scrollOffset += event.delta * 0.5; // event.delta: how much the mouse scroll. * 0.5 to slow it down.
		scrollOffset = constrain(scrollOffset, 0, maxScroll); // Doesn't let the user scroll past the first or last item.

		return false; // Prevent the browser from also scrolling the page.
	}
}


function Beginning() {
	scene = 0;
	button2.hide();
	button3.hide();
	button1.show();
}

function Start() {
	scene = 1;
	button1.hide();
	button2.show();
	button3.hide();

}


function End() {
	scene = 2;
	button2.hide();
	button1.hide();
	button3.show();

}

