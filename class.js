class Grocery {
  constructor(x, y, sizeX, sizeY, img, CO2, itemName) {
    this.x = this.originalX = x;
    this.y = this.originalY = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.img = img;
    this.CO2 = CO2;
    this.itemName = itemName;
    this.targetX = x;
    this.targetY = y;
    this.isMoving = false;
  }

  displayGrocery() {
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
  }

  isHovering() {
    return mouseX > this.x - this.sizeX / 2 && mouseX < this.x + this.sizeX / 2
        && mouseY > this.y - this.sizeY / 2 && mouseY < this.y + this.sizeY / 2;
  }

  isClicked() {
    return mouseIsPressed && this.isHovering();
  }

  displayClickedGrocery() {
    if (this.isMoving) this.easing();
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
  }

  easing() {
    this.x = 0.92 * this.x + 0.08 * this.targetX;
    this.y = 0.92 * this.y + 0.08 * this.targetY;
  }
}