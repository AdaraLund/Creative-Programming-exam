//Set variables here
let groceryList = [];


function preload() { // For loading before program is run
	// cart
	piCartBack = loadImage('./assets/pinkcartback.png');
	piCartFront = loadImage('./assets/pinkcartfront.png');

	// All the images to our groceries
	appleImg = loadImage('./assets/apple.png');
	avocadoImg = loadImage('./assets/avocado.png');
	bananaImg = loadImage('./assets/banana.png');
	cucumberImg = loadImage('./assets/cucumber.png');
	carrotImg = loadImage('./assets/carrot.png');
	watermelonImg = loadImage('./assets/watermelon.png');
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

	apple = new Grocery(150, 200, 80, 80, appleImg, 0.61);
	banana = new Grocery(330, 70, 120, 120, bananaImg, 1.02);
	avocado = new Grocery(120, 60, 110, 90, avocadoImg, 0.73);
	cucumber = new Grocery(350, 210, 100, 100, cucumberImg, 0.14);
	carrot = new Grocery(230, 200, 130, 130, carrotImg, 0.27);
	watermelon = new Grocery(120, 200, 140, 140, watermelonImg, 1.2);

	// Lige nu pusher jeg manuelt vores frugter, indtil bedre løsning
	groceryList.push(apple, banana, avocado, cucumber, carrot, watermelon);
	console.log(groceryList);
}

function draw() {
	background(250, 220, 230);
	//Making x and y appear on the canvas when hovering
	textSize(16);
	fill(0);
	text('x =' + round(mouseX), 30, 20);
	text('y =' + round(mouseY), 30, 40);
	strokeWeight(0);

	//cart back - skal være bagerste
	image(piCartBack, 600, 450, 300, 200);


	// shelf 1
	fill(166, 130, 86);
	rect(50, 50, 350, 70);

	// shelf 2
	rect(50, 210, 350, 70);

	// shelf 3 
	rect(450, 50, 400, 70);

	// shelf 4 
	rect(450, 210, 400, 70);

	// recipt
	fill(250, 230, 190);
	rect(930, 50, 200, 380);

	for (let i = 0; i < groceryList.length; i++) {
		groceryList[i].display(i);

	}


	//front of cart - skal være det forreste lag
	image(piCartFront, 595, 500, 235, 150);

}


