//Set variables here
let groceryList = [];

function preload() { // For loading before program is run
	// cart
	piCartBack = loadImage('./assets/pinkcartback.png');
	piCartFront = loadImage('./assets/pinkcartfront.png');

	// All the images to our groceries
	appleImg = loadImage('./assets/apple.png');
	avocadoImg = loadImage('./assets/avocados.png');
	bananaImg = loadImage('./assets/banana.png');
	//cucumberImg = loadImage('./assets/cucumber.png');
	//carrotImg = loadImage('./assets/carrot.png');
}

function setup() {
	createCanvas(1200, 550); //canvas size of screen
	background(150, 200, 80); // green background
	frameRate(60); //framerate
	strokeWeight(0); // size of frame of object

	// placing images by their center instead of corner
	imageMode(CENTER);



}

function draw() {
	background(250, 220, 230);
	//Making x and y appear on the canvas when hovering
	textSize(16);
	fill(0);
	text('x =' + round(mouseX), 30, 20); 
	text('y =' + round(mouseY), 30, 40);
	strokeWeight(0);


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


	//front of cart
	image(piCartFront, 595, 500, 235, 150);
}


