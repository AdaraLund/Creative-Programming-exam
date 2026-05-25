

/**
 * This is a grocery
 */
class Grocery {
	constructor(x, y, sizeX, sizeY, img, CO2, itemName) {
		this.x = x; // Placement X
		this.y = y; // Placement Y
		this.sizeX = sizeX; // Size of object on its X
		this.sizeY = sizeY; // Size of object on its Y
		this.img = img; // The picture attached
		this.CO2 = CO2; // It's CO2 amount
		this.itemName = itemName; // The name of the product

		// I've added this for easing, so theres a target X and Y, where the object should float there. 
		this.targetX = x;
		this.targetY = y;
		this.isMoving = false; // We ask if the object is moving, to decide if it should be dragged to basket
		this.originalX = x; // // Used when the product need to return after being removed from receipt
   		this.originalY = y; // Used when the product need to return after being removed from receipt
	}

	//This is what displays our starting grocery list

	displayGrocery() {
		image(this.img, this.x, this.y, this.sizeX, this.sizeY);

	}

	/*
		The isHovering function uses the true/false value from "anyhover".
		It checks whether the mouse is hovering over one of the objects,
		and returns true if it is hovering, and false if it is not.
		This allows the cursor to automatically change state when the mouse hovers over an object.
	*/

	/**
* When hovering
	*/
	isHovering() {
		if (mouseX > this.x - this.sizeX / 2 && mouseX < this.x + this.sizeX / 2 && mouseY > this.y - this.sizeY / 2 && mouseY < this.y + this.sizeX / 2) {
			return true;
		} else {
			return false;
		}
	}

	/**
* Our clicked function
	*/

	isClicked() {
		if (mouseIsPressed === true && mouseX > this.x - this.sizeX / 2 && mouseX < this.x + this.sizeX / 2 && mouseY > this.y - this.sizeY / 2 && mouseY < this.y + this.sizeX / 2) {
			return true;
		} else {
			return false;
		}
	}



	displayClickedGrocery() { // This displays our clicked objects array instead of our starting array
		// Added to determine if the object is moving, to be able to make use of easing
		if (this.isMoving) {
			this.easing();
		}
		image(this.img, this.x, this.y, this.sizeX, this.sizeY);

	}


	easing() { 
		// This is the easing towards our basket
		this.x = 0.92 * this.x + 0.08 * this.targetX;
		this.y = 0.92 * this.y + 0.08 * this.targetY;


	}

}

//Setting up our groceries and their picture variables
// The first two are their placements
//the second two are their size
//the 5th is the image variable name
//the last is the Co2 amount


//fruit and vegs

let xImg;

let apple;
let appleImg;

let avocadoImg;
let avocado;

let bananaImg;
let banana;

let cucumberImg;
let cucumber;

let carrotImg;
let carrot;

let watermelonImg;
let watermelon;


//Dry goods 
//Cas: The notes are Co2 pr product
let toast; // 0.81
let toastImg;

let ryebread; // 1.02
let ryebreadImg;

let chips; // 0.74 
let chipsImg;

let cookies; // 0.73
let cookiesImg;

let baguette; // 0.81
let baguetteImg;

// nutella, flowers, oreo, ramen, cornflakes

let nutella;
let nutellaImg;

let flowers;
let flowersImg;

let oreo;
let oreoImg;

let ramen;
let ramenImg;

let cornflakes;
let cornflakesImg;


//Refrigiated
let chicken; // 0.58
let chickenImg;

let cheese; // 1.08 
let cheeseImg;

let oatMilk; // 0.40
let oatMilkImg;

let milk; // 0.50
let milkImg;

let eggs; // 0.58
let eggsImg;

//drinks
let wine; // 1.24 
let wineImg;

let soda; //  Can: 0,30 Bottle = 0,88
let sodaImg;

let beer; // 0.22
let beerImg;

let water; // 0.28 
let waterImg;

