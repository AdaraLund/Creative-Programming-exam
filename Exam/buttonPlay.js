let button;

function setup() {
  createCanvas(300, 300);

  background(200);

  // Create a button and set its value to 0.
  // Place the button beneath the canvas.
  button = createButton('click me', 'red');
  button.position(130, 320);

  // Call randomColor() when the button is pressed.
  button.mousePressed(randomColor);

  describe('A red square with a button that says "click me" beneath it. The square changes color when the button is clicked.');
}

function draw() {
  // Use the button's value to set the background color.
  let c = button.value();
  background(c);
}

// Set the button's value to a random color.
function randomColor() {
  let c = random(['red', 'green', 'blue', 'yellow']);
  button.value(c);
}