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
	rect(50, 50, 500, 70);

	// shelf 2
	rect(50, 210, 500, 70);

	// shelf 3 
	rect(650, 50, 500, 70);

	// shelf 4 
	rect(650, 210, 500, 70);

	for (let i = 0; i > Grocery.length; i++) {
		Grocery[i].display(i);
		display(i);
	}


	//front of cart - skal være det forreste lag
	image(piCartFront, 595, 500, 235, 150);

}


