
//Set variables here
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

	hoverCursor() { // Next project
		//  if (mouseX > avox - 35 && mouseX < avox + 50 && mouseY > avoy - 50 && mouseY < avoy + 50 || mouseX > appx - 50 && mouseX < appx + 35 && mouseY > appy - 35 && mouseY < appy + 35 || mouseX > banax - 60 && mouseX < banax + 60 && mouseY > banay - 60 && mouseY < banay + 60) {
		// cursor(HAND);
		//} else {
		// cursor(ARROW);
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










// her er der ingen functions, da den så crasher. Tænker det er fordi den overrider main functions. 

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
