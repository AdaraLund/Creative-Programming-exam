//Set variables here
let groceryList = [];
let clickedGrocery = [];


function preload() { // For loading before program is run
	// cart
	piCartBack = loadImage('./assets/pinkcartback.png');
	piCartFront = loadImage('./assets/pinkcartfront.png');
	backbackground = loadImage('./assets/backbackground.png');
	frontbackground = loadImage('./assets/frontbackground.png');

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


	receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');
	paperTexture = loadImage('./assets/paperTexture.png');

	// sound
	sound = loadImage('./assets/sound.png')
	sound = loadImage('./assets/Nosound.png')
}

function setup() {
	createCanvas(1200, 550); //canvas size of screen
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
	wine = new Grocery(300, 165, 25, 70, wineImg, 1.24, "Wine");
	ryebread = new Grocery(400, 170, 40, 70, ryebreadImg, 1.02, "Ryebread");
	baguette = new Grocery(500, 170, 80, 80, baguetteImg, 0.81, "Baguette");
	toast = new Grocery(600, 170, 70, 80, toastImg, 0.81, "Toast");
	beer = new Grocery(140, 92, 40, 70, beerImg, 0.22, "Beer");
	cookies = new Grocery(820, 170, 90, 40, cookiesImg, 0.73, "Cookies");
	milk = new Grocery(100, 162, 40, 70, milkImg, 0.50, "Milk");
	oatMilk = new Grocery(160, 165, 40, 70, oatMilkImg, 0.40, "Oatmilk");
	soda = new Grocery(185, 235, 40, 70, sodaImg, 0.88, "Soda");


	// Lige nu pusher jeg manuelt vores frugter, indtil bedre løsning
	groceryList.push(soda, oatMilk, milk, cookies, beer, banana, avocado, cucumber, carrot, watermelon, apple, water, wine, ryebread, baguette, toast);
	console.log("Grocery list; " + groceryList.length + " objects");
}

function draw() {
	background(250, 220, 230);
	image(backbackground, 1200 / 2, 550 / 2, 1200, 550);
	//Making x and y appear on the canvas when hovering
	textSize(16);
	fill(0);
	text('x =' + round(mouseX), 30, 20);
	text('y =' + round(mouseY), 30, 40);
	strokeWeight(0);

	let anyhover = false;

	// Recipt box
	let receiptX = 970; // start-position fra venstre  
	let receiptTopY = 10; // start-position fra toppen 
	let receiptW = 230;  // bredde 
	let receiptH = 500;  // højde 

	fill(246, 236, 215, 0); // (pt. usynlig firkant bag kvittering (0 = alpha)
	rect(receiptX, receiptTopY, receiptW, receiptH); // den usynlige boks der definerer kvitteringens område
	image(paperTexture, receiptX + receiptW / 2, receiptTopY + receiptH / 2, receiptW + 210, receiptH + 20); 
	// paperTexture placeres i midten af boksen (derfor + bredde/2 og + højde/2)
	// de sidste to tal er størrelsen sat til receiptW og receiptH så den passer præcis


	// Recipt, title
	fill(0);
	textSize(20);
	textAlign(CENTER);
	textFont(receiptFont);
	text("CO2 SHOPPING", receiptX + receiptW / 2, 100);


	// Adaras note til Casandra; hvis du bruger clickedGrocery arrayet, så er det dem i vores kurv, i stedet for at tælle x og y.

	/* 
	På kvitteirngen vises CO2 for hver vare i clickedGrocery arrayet. Derefter beregnes total
	textAlign der skifter fra left and right er for at give kvitterings layoutet
	*/

	let totalCO2 = 0;
	let receiptY = 130; // startposition for tekst på kvitteringen fra toppen
	let receiptLeft = 1005; // x-position for venstre tekst (varenavne)
	let receiptRight = 1160; // x-position for højre tekst (CO2-værdier)

	textSize(14);
	textFont(receiptFont);

	strokeWeight(1);
	line(receiptLeft, receiptY - 20, receiptRight, receiptY - 20);

	for (let i = 0; i < clickedGrocery.length; i++) {
		let item = clickedGrocery[i];

		textAlign(LEFT);
		text(item.itemName, receiptLeft, receiptY);

		textAlign(RIGHT);
		text(item.CO2 + " kg", receiptRight, receiptY);

		totalCO2 += item.CO2; // læg varens CO2 til totalen
		receiptY += 25; // rykker x antal pixel ned for hver tilføjet item 
	}

	// vis kun total hvis der er mindst én vare i kurven
	if (clickedGrocery.length > 0) { // Gør at der kun står total hvis der er mindst én vare i kurven. Ellers vises intet.
		strokeWeight(1);
		line(receiptLeft, receiptY - 15, receiptRight, receiptY - 15);

		receiptY += 15; // lidt ekstra luft før totallinjen
		textSize(16); // gør total større end teksten 

		textAlign(LEFT);
		text("Total CO2 KG", receiptLeft, receiptY);

		textAlign(RIGHT);
		text(totalCO2.toFixed(2), receiptRight, receiptY);  // toFixed(2) runder af til 2 decimaler
		//text(totalCO2.toFixed(2) + "CO2 KG", receiptRight, receiptY);  vil vi helst have "co2 kg" til venstre eller højre?
	}

	textAlign(LEFT);


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
			item.targetY = random(430, 530);
			item.isMoving = true;
			// så flytter vi objektet fra groceryList til clickedGrocery, som er når de er i kurven.
			// clickedGrocery.push(item); Dette dobbelt-pusher. Må det slettes? :)

			clickedGrocery.push(groceryList[i]); // Push clicked object to different array
			groceryList.splice(i, 1); // This takes the i placement in our array and removes 1 element, which is the i spot

		} else {
			console.log("No work!"); //debugging
		}
	}


	//cart back 
	image(piCartBack, 600, 470, 270, 170);

	// Denne displayer vores clickedGrocery array i stedet for originale groceryList
	for (let i = 0; i < clickedGrocery.length; i++) {
		clickedGrocery[i].displayClickedGrocery();
	}

	//front of cart, always at the end
	image(piCartFront, 595, 510, 220, 120);

	// little sound symbol
	image(sound, 1160, 30, 40, 40);
	// image(Nosound, 1160, 30, 40, 40); skal vise når den bliver trykket på
}


/*
function mousePressed() {
    for (let i = 0; i < groceryList.length; i++) { // Der gåes igennem alle produkter en efter en
        if (groceryList[i].isHovering()) { // genbruger isHovering til at tjekke hvilket produkt der er blevet trykket på
            clickedGrocery.push(groceryList[i]); // Den vare musen er henover bliver skubbet over i kurv-arrayet.
            groceryList.splice(i, 1); // Den samme vare bliver fjernet fra butiks-arrayet, så den ikke vises på hylden længere.
            break; // stopper loopet så kun én vare tilføjes per klik
        }
    }
}

mouseIsPressed = "holder du musen nede lige nu?". Det var true i mange frames, aka. fejl
mousePressed() = "blev der klikket?" Tælles kun én gang
*/