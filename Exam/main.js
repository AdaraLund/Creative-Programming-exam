//Set variables here
let groceryList = [];
let clickedGrocery = [];
let tintValue;




let soundOn = true;


function preload() { // For loading before program is run
	// cart and background
	piCartBack = loadImage('./assets/pinkcartback.png');
	piCartFront = loadImage('./assets/pinkcartfront.png');
	backbackground = loadImage('./assets/backbackground.png');
	extraStone = loadImage('./assets/extraStone.png');
	frontbackground = loadImage('./assets/frontbackground.png');
	shelfbasketbackground = loadImage('./assets/shelfbasket.png');
	frontbaguettebasket = loadImage('./assets/frontbreadbasket.png');

	// This is our Cracks - i put them active for now
	cracks = loadImage('./assets/cracks.png');
	cracksExtra = loadImage('./assets/cracksExtra.png');

	// All the images to our groceries
	appleImg = loadImage('./assets/apple.png');
	avocadoImg = loadImage('./assets/avocado.png');
	bananaImg = loadImage('./assets/banana.png');
	cucumberImg = loadImage('./assets/cucumber.png');
	carrotImg = loadImage('./assets/carrot.png');
	watermelonImg = loadImage('./assets/watermelon.png');
	waterImg = loadImage('./assets/water.png');
	wineImg = loadImage('./assets/wine.png');
	ryebreadImg = loadImage('./assets/rugbr.png');
	baguetteImg = loadImage('./assets/baguette.png');
	toastImg = loadImage('./assets/toast.png');
	beerImg = loadImage('./assets/beer.png');
	cookiesImg = loadImage('./assets/cookie.png');
	milkImg = loadImage('./assets/milk.png');
	oatMilkImg = loadImage('./assets/oatmilk.png');
	sodaImg = loadImage('./assets/soda.png');

	// font and receipt texture
	receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');
	paperTexture = loadImage('./assets/paperTexture.png');

	// sound pictures
	sound = loadImage('./assets/sound.png')
	noSound = loadImage('./assets/noSound.png')

	// sounds and music
	backgroundSong = loadSound('assets/backgroundMusic.mp3');
	basketSound = loadSound('assets/basket.mp3');
	sadSong = loadSound('assets/sadMusic.wav')
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
	banana = new Grocery(470, 290, 80, 80, bananaImg, 1.02, "Banana");
	avocado = new Grocery(340, 300, 70, 50, avocadoImg, 0.73, "Avocado");
	cucumber = new Grocery(550, 395, 80, 80, cucumberImg, 0.14, "Cucumber");
	carrot = new Grocery(690, 290, 110, 110, carrotImg, 0.27, "Carrot");
	watermelon = new Grocery(800, 400, 100, 100, watermelonImg, 1.2, "Watermelon");
	water = new Grocery(180, 95, 30, 70, waterImg, 0.28, "Water");
	wine = new Grocery(320, 64, 30, 85, wineImg, 1.24, "Wine");
	ryebread = new Grocery(400, 168, 40, 70, ryebreadImg, 1.02, "Ryebread");
	baguette = new Grocery(225, 350, 60, 160, baguetteImg, 0.81, "Baguette");
	toast = new Grocery(600, 165, 60, 70, toastImg, 0.81, "Toast");
	beer = new Grocery(134, 96, 40, 70, beerImg, 0.22, "Beer");
	cookies = new Grocery(820, 180, 90, 40, cookiesImg, 0.73, "Cookies");
	milk = new Grocery(100, 162, 40, 70, milkImg, 0.50, "Milk");
	oatMilk = new Grocery(160, 165, 40, 70, oatMilkImg, 0.40, "Oatmilk");
	soda = new Grocery(90, 97, 40, 70, sodaImg, 0.88, "Soda");


	// Lige nu pusher jeg manuelt vores frugter, indtil bedre løsning
	groceryList.push(soda, oatMilk, milk, cookies, beer, banana, avocado, cucumber, carrot, watermelon, apple, water, wine, ryebread, baguette, toast);
	console.log("Grocery list; " + groceryList.length + " objects"); // Debugging



}

function draw() {
	background(250, 220, 230);
	image(extraStone, 1200 / 2, (575 / 2) + 27.5, 1200, 600);
	image(backbackground, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center
	image(shelfbasketbackground, 1200 / 2, 550 / 2, 1200, 550); // /2 since we place images by center

	//Making x and y appear on the canvas when hovering
	textSize(16);
	fill(0);
	text('x =' + round(mouseX), 30, 33);
	text('y =' + round(mouseY), 30, 53);
	strokeWeight(0);

	let anyhover = false; //  Variabel pre made for hover function

	// Receipt box
	let receiptX = 970; // start-position fra venstre  
	let receiptTopY = 10; // start-position fra toppen 
	let receiptW = 230;  // bredde 
	let receiptH = 500;  // højde 


		

	fill(246, 236, 215, 0); // (gør firkant bag kvittering gennemsigtig. 0 = alpha)
	rect(receiptX, receiptTopY, receiptW, receiptH); // den usynlige boks der definerer kvitteringens område
	image(paperTexture, receiptX + receiptW / 2, receiptTopY + receiptH / 2, receiptW + 210, receiptH + 20);
	// paperTexture placeres i midten af boksen (derfor + bredde/2 og + højde/2)
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
	let receiptLeft = 1005; // x-position for venstre tekst (varenavne)
	let receiptRight = 1160; // x-position for højre tekst (CO2-værdier)

	textSize(14);



	// streg 1 (under titel)
	// drawingContext bruges for at "unlock" en stribet-linje funktion p5 ikke selv har 
	strokeWeight(0.5);
	drawingContext.setLineDash([3, 3]); // længde på streg, længde på mellemrum
	line(receiptLeft, receiptY - 20, receiptRight, receiptY - 20);
	drawingContext.setLineDash([]);
	/* Nedenfor ses et forloop hvor der gennemgåes produkterne i "clickedGrocery" arrayet. 
	For hvert produkt skriver itemName til venstre (itemName som jeg har kaldt produkt-navnet i class)
	og så for at holde kvitteringensstilen placere jeg "prisen" til højre
	hence -> produktets co2 (som det er kaldt i class) og derefter tilføjes bogstaverne kg bag på teksten.

	totalCO2 opdateres løbende for hvert produkt, der rykker til "clickedGrocery" array, 
	og receiptY rykkes 25 pixels ned så næste vare placeres på en ny linje. */




	for (let i = 0; i < clickedGrocery.length; i++) {
		let item = clickedGrocery[i];

		textAlign(LEFT);
		text(item.itemName, receiptLeft, receiptY);

		textAlign(RIGHT);
		text(item.CO2 + " kg", receiptRight, receiptY);

		totalCO2 += item.CO2; // læg varens CO2 til totalen
		receiptY += 25; // rykker x antal pixel ned for hver tilføjet item 
	}
			cracking(totalCO2); // function for updating the CO2

	// vis kun total hvis der er mindst én vare i kurven
	if (clickedGrocery.length > 0) { // Gør at der kun står total hvis der er mindst én vare i kurven. Ellers vises intet.

		// streg 2 (over total)
		strokeWeight(0.5);
		drawingContext.setLineDash([3, 3]);
		line(receiptLeft, receiptY - 10, receiptRight, receiptY - 10);
		drawingContext.setLineDash([]);

		receiptY += 15; // lidt ekstra luft før totallinjen
		textSize(16); // gør total større end teksten 

		textAlign(LEFT);
		text("TOTAL CO2", receiptLeft, receiptY);

		textAlign(RIGHT);
		// text(totalCO2.toFixed(2), receiptRight, receiptY);  // toFixed(2) runder af til 2 decimaler
		text(totalCO2.toFixed(2) + " KG", receiptRight, receiptY); //  vil vi helst have "co2 kg" til venstre eller højre?
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

	//Hvis et objekt klikkes på bliver det pushet fra et array ind i et andet array.
	for (let i = 0; i < groceryList.length; i++) {

		if (groceryList[i].isClicked()) {
			console.log("Clicked!"); //debugging
			let item = groceryList[i]; // Vi gemmer objektet som blev klikket

			// X og Y koordinator for at produkterne kan være inde i kurven.
			item.targetX = random(550, 650);
			item.targetY = random(460, 500);
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



	// images for sound on/off image
	if (soundOn) {
		image(noSound, 1160, 30, 40, 40);
	} else {
		image(sound, 1160, 30, 40, 40);
	}

}

function mousePressed() {

	// here we check if the mouse is clicking on the x and y positions, where the image is
	if (
		mouseX > 1140 && mouseX < 1180 &&
		mouseY > 10 && mouseY < 50
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
}
 // a function for the background having cracks after 4 and 6 kg of CO2
	function cracking(totalCO2){
		if (totalCO2 >= 4){
		image(cracksExtra, 1200/2, (575 / 2) + 27.5, 1200, 550);
		}
		if (totalCO2 >= 6){
 		image(cracks, 1200/2, 550/2, 1200, 550);	
		sadSong.setVolume(0.3);
		sadSong.play();
		backgroundSong.pause();

		}
	}

