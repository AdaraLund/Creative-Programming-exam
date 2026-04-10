
function setup(){
    let canvas = createCanvas(1200, 600);
    background(255, 255, 255);
	// x and y are being used for positioning the canvas in the middle of the screen.
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;

	canvas.position(x, y); // positions the canvas in the middle of the screen.

}

function draw(){
Text("Welcome to the CO2 supermarket simulator! Click to start!", 400, 300);
}let onStartScreen = true; // Boolean to track if we are on the start screen

function setup() {
    let canvas = createCanvas(1200, 600);
    background(255, 255, 255);
    // x and y are being used for positioning the canvas    let onStartScreen = true; // Boolean to track if we are on the start screen
    
    function setup() {
        let canvas = createCanvas(1200, 600);
        background(255, 255, 255);
        // Center the canvas
        let x = (windowWidth - width) / 2;
        let y = (windowHeight - height) / 2;
        canvas.position(x, y);
    }
    
    function draw() {
        if (onStartScreen) {
            // Start screen logic
            background(255, 255, 255); // White background
            textSize(24);
            textAlign(CENTER, CENTER);
            fill(0); // Black text
            text("Welcome to the CO2 supermarket simulator! Click to start!", width / 2, height / 2);
        } else {
            // Main game logic
            background(200, 230, 255); // Example background for the main game
            textSize(16);
            fill(0);
            text("Main game screen", width / 2, height / 2);
        }
    }
    
    function mousePressed() {
        if (onStartScreen) {
            // Switch to the main game
            onStartScreen = false;
        }
    } // in the middle of the screen.
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;

    canvas.position(x, y); // positions the canvas in the middle of the screen.
}

function draw() {
    if (onStartScreen) {
        // Draw the start screen
        background(255, 255, 255); // White background
        textSize(24);
        textAlign(CENTER, CENTER);
        fill(0); // Black text
        text("Welcome to the CO2 supermarket simulator! Click to start!", width / 2, height / 2);
    } else {
        // Main game logic goes here
        background(200, 230, 255); // Example background for the main game
        textSize(16);
        fill(0);
        text("Main game screen", width / 2, height / 2);
    }
}

function mousePressed() {
    if (onStartScreen) {
        // If on the start screen, switch to the main game
        onStartScreen = false;
    }
}