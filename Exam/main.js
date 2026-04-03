//Set variables here
let groceryList = [];
let receiptFont;
let paperTexture;



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

	receiptFont = loadFont('./assets/SpecialElite-Regular.ttf');
	paperTexture = loadImage('./assets/paperTexture.png');
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

	apple = new Grocery(330, 390, 60, 60, appleImg, 0.61);
	banana = new Grocery(470, 290, 80, 80, bananaImg, 1.02);
	avocado = new Grocery(340, 300, 70, 50, avocadoImg, 0.73);
	cucumber = new Grocery(550, 395, 80, 80, cucumberImg, 0.14);
	carrot = new Grocery(690, 290, 110, 110, carrotImg, 0.27);
	watermelon = new Grocery(800, 400, 100, 100, watermelonImg, 1.2);

	// Lige nu pusher jeg manuelt vores frugter, indtil bedre løsning
	groceryList.push(banana, avocado, cucumber, carrot, watermelon, apple);
	console.log(groceryList);
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




	// recipt
	fill(246, 236, 215, 0); // (pt. usynlig firkant bag kvittering (0 = alpha)
	rect(930, 50, 200, 380);
	image(paperTexture, 930 + 200 / 2, 65 + 380 / 2, 320, 580); // Hard coding

	// recipt, title
	fill(0);
	textSize(20);
	textAlign(CENTER);
	textFont(receiptFont);
	text("CO2 Calculator", 930 + 200 / 2, 100);


	/*
	Går igennem arrayet med vores groceries
	For hver af elementerne i vores array kalder den i vores Grocery Class
	For hver af de elementer tager den informationerne i Display functionen i Class.js
	Den placerer så alle billederne.
	*/
	for (let i = 0; i < groceryList.length; i++) {
		groceryList[i].display();

	}

	/*
	Prøver hover ved funktion, men lige nu kan man kun se sidste element i array
	Jeg prøver at finde en måde, hvor det er dem alle. 
	
	
		for(let i = 0; i < groceryList.length; i++) {
			groceryList[i].hoverCursor();
	
		}
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







	//front of cart - skal være det forreste lag
	image(frontbackground, 1200 / 2, 550 / 2, 1200, 550);

	// Her skal vi have en funktion hvor der står noget om
	/* Pseudo kode til husk til næste gang
	Lav endnu en funktion under class der hedder whenClicked
	den skal fjerne/splice det der bliver klikket på fra nuværende GroceryList array
	og push/tilføje det til et nyt array der er clickedGrocery
	og clicked grocery så kører igennem;
		for (let i = 0; i < clickedGrocery.length; i++) {
			clickedGrocery[i].display();
	
		}
	for at den kommer på det rigtige lag mellem vores frontbackground og back of cart
	Det er også den måde vi kan tælle CO2 mængde, da vi så bare tager clickedGrocery arrayet 
	og går igennem hver grocery i dets array, og tilføjer CO2
	*/

	//cart back 
	image(piCartBack, 600, 470, 270, 170);
	image(piCartFront, 595, 510, 220, 120);

}






