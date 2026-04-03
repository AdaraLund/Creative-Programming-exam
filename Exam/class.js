
// her er der ingen functions, da den så crasher. Tænker det er fordi den overrider main functions. 

/**
 * This is a grocery
 */
class Grocery {
	constructor(x, y, sizeX, sizeY, img, CO2) {
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.img = img;
		this.CO2 = CO2;
	}

	display() {
		image(this.img, this.x, this.y, this.sizeX, this.sizeY);
	}

	/*
	 isHovering funktionen handler om at den tager true/false fra "anyhover",
	 hvor den tjekker om den hover over en af objekterne, og returner true hvis hover, 
	 false hvis ikke hover. 
	 så den automatisk ændrer cursor state når man hover sin mus over en af objekterne.
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

	/*
mouseClicked(mouseX > this.x - this.sizeX / 2 && mouseX < this.x + this.sizeX / 2 && mouseY > this.y - this.sizeY / 2 && mouseY < this.y + this.sizeX / 2) {
  // Code to run that uses the event.
  console.log("click!");
}

		/* Kode jeg nuværende arbejder på
	mouseClicked() {
		if (mouseX > this.x - this.sizeX / 2 && mouseX < this.x + this.sizeX / 2 && mouseY > this.y - this.sizeY / 2 && mouseY < this.y + this.sizeX / 2) {
		//	this.x = 0.9 * this.x + 0.1 * random(530,657);
		//	this.y = 0.9 * this.y + 0.1 * random(453,544);
			console.log("click!");
		}

		if (mouseY > 50) {
			// Code to run if the mouse is near the bottom.
		}


		
	}
		*/
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

//Refrigiated
let chicken; // 4.91
let chickenImg;

let cheese; // 1.08 
let cheeseImg;

let oatMilk; // 0.40
let oatMilkImg;

let milk; // 0.50
let milkImg;

let butter; // 0.82
let butterImg;

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
