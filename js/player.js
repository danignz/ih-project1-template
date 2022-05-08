class Player {
  constructor(x, y, charObject) {
    this.x = x;
    this.y = y;
    // this.width = width;
    //  this.height = height;
    this.width = charObject.imageSecuence[0].width * charObject.scale;
    //console.log(charObject.imageSecuence[0].width);
    this.height = charObject.imageSecuence[0].height * charObject.scale;
    //console.log(charObject.imageSecuence[0].height);
    this.charName = charObject.name;
    this.scale = charObject.scale;
    this.imagePath = undefined;
    this.chakraBall = new ChakraBall(this.x, this.y);
    this.charImages = charObject.imageSecuence;
  }

  moveRight() {
    if (this.x + 15 <= canvas.width - this.width) {
      //console.log(canvas.width);
      //console.log(this.x);
      this.x = this.x + 15;
    }
  }

  moveLeft() {
    if (this.x - 15 >= 0) {
      //console.log(canvas.width);
      //console.log(this.x);
      this.x = this.x - 15;
    }
  }

  moveUp() {
    if (this.y - 15 >= screenHeightLimit) {
      this.y = this.y - 15;
    }
  }

  moveDown() {
    if (this.y + 15 <= canvas.height - this.height) {
      //console.log(canvas.height);
      //console.log(this.y);
      this.y = this.y + 15;
    }
  }

  specialAttack() {
    this.chakraBall._assignImage();
  }
}
