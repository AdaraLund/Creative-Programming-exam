
// her er der ingen functions, da den så crasher. Tænker det er fordi den overrider main functions. 

/**
 * This is a grocery
 */
class Grocery {
	constructor(x, y, sizeX, sizeY, img, CO2, itemName) {
		this.x = x; // Placering X
		this.y = y; // Placering Y
		this.sizeX = sizeX; // Størrelse af objekt på X
		this.sizeY = sizeY; // Størrelse af objekt på Y
		this.img = img; // Det billede der kobles til
		this.CO2 = CO2; // Dets CO2 mængde
		this.itemName = itemName; // Hvad produktet hedder

		// Jeg har added dette ift easing, for Target X og Y, hvor objektet skal besæve sig til.
		this.targetX = x;
		this.targetY = y;
		this.isMoving = false; //vi spørger om objekter er i bevægelse for at afgøre om den skal trækkes til kurv
		this.originalX = x; // // Used when the product need to return after being removed from receipt
   		this.originalY = y; // Used when the product need to return after being removed from receipt
	}

	// Dette displayer vores groceryList

	displayGrocery() {
		image(this.img, this.x, this.y, this.sizeX, this.sizeY);
		/*if (totalCO2 < 5) {
			tint(84, 74, 63);
			image(this.img, this.x, this.y, this.sizeX, this.sizeY);
			return;
		} else {
			image(this.img, this.x, this.y, this.sizeX, this.sizeY);
		}
			*/
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



	displayClickedGrocery() { // Denne display tager vores clickedGrocery array i stedet for originale groceryList

		// Tilføjet dette så man afgører om objektet er i bevægelse, for at kunne bruge easing til at flytte det mod target
		if (this.isMoving) {
			this.easing();
		}
		image(this.img, this.x, this.y, this.sizeX, this.sizeY);

	}


	easing() { // 

		// vi flytter objektet gradvist mod positionen
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
//Cas: Noterne er Co2 pr. product
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


/*  Det her er hvad Adara og Line lavede sammen, og er indsat for nemt at sammenligne
class Grocery {
	constructor(x, y, sizeX, sizeY, img, co2){
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.img = img;
		this.co2 = co2;
		//de behøves ikke være givet oppe i parantes, du kan også skrive:
		//this.shakyEffect = random(30, 50);
		//så bliver alle objekter af typen Grocery givet en shakyEffect mellem 30 og 50
	}

	display(showCaseNo){
		showCaseNo = showCaseNo * 50; //50 er abritær afstand mellem frugter
		image(this.img, this.x + showCaseNo, this.y);
	}

	checkPlacement(){ // ikke nødvendig hvis i bare laver det til klik
		if(this.x < NUMMER && this.x > NUMMER && /*samme for this.y...) {
			return true;
		} else {
			return false;
		}
	}
}

_______ // Den her linje betyder i et andet dokument

//alt det her sker i sketch.js



let groceryList = [];
let appleImg;

function preLoad(){
	appleImg = loadImage(...);
}

function setup() {

let apple = new Grocery(..., "CO2", appleImg);
let banana = new Grocery(...);

groceryList.push(apple, banana);

}


//DRAW
function draw(){

	for(let i = 0; i < groceryList.length; i++){
	groceryList[i].display(i); //displayer alle elementer på listen
	}

	for(let i = 0; i < groceryList.length; i++){
	if(groceryList[i].checkPlacement){
		//gør noget
		groceryList.splice(i, 1); //fjerner element fra liste, ikke nødvendig at checkPlacement medmindre i bruger drag
	}
   
}
}
*/
