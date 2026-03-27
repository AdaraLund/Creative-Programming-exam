
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


}

//Setting up our groceries and their picture variables
// The first two are their placements
//the second two are their size
//the 5th is the image variable name
//the last is the Co2 amount

//THE LAST VARIABLE IS A PLACEHOLDER AND SHOULD BE REPLACED 

	//fruit and vegs
	let appleImg;
	let apple = new Grocery(150, 200, 70, 70, appleImg, 0.61);

	let avocadoImg;
	let avocado = new Grocery(120,60,110,90,avocadoImg, 0.73);

	let bananaImg;
	let banana = new Grocery(330, 70, 120, 120, bananaImg, 1.02);

	let cucumberImg;
	let cucumber = new Grocery(x, y, 70, 70, cucumberImg, 0.14);

	let carrotImg;
	let carrot = new Grocery(x, y, 70, 70, carrotImg, 0.27);

	let watermelonImg;
	let watermelon = new Grocery(x, y, 70, 70, watermelonImg, 1.2);


	//Dry goods
	let toast;
	let toastImg;

	let ryebread;
	let ryebreadImg;

	let chips;
	let chipsImg;

	let cookies;
	let cookiesImg;

	let baguette;
	let baguetteImg;

	//Refrigiated
	let chicken;
	let chickenImg;

	let cheese;
	let cheeseImg;

	let oatMilk;
	let oatMilkImg;

	let milk;
	let milkImg;

	let butter;
	let butterImg;

	//drinks
	let wine;
	let wineImg;

	let soda;
	let sodaImg;

	let beer;
	let beerImg;

	let water;
	let waterImg;

// Making the variables with information



// her er der ingen functions, da den så crasher. Tænker det er fordi den overrider main functions. 

/*
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
