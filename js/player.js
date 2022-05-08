class Player {
  constructor(x, y, charObject) {
    this.x = x;
    this.y = y;
    //Due the images do not have the same size, it is necessary to scale depending on each character
    this.width = charObject.imageSecuence[0].width * charObject.scale;
    //console.log(charObject.imageSecuence[0].width);
    this.height = charObject.imageSecuence[0].height * charObject.scale;
    //console.log(charObject.imageSecuence[0].height);
    this.charName = charObject.name;
    this.scale = charObject.scale;
    this.charImages = charObject.imageSecuence;
    this.chakraBall = new ChakraBall();
  }

  moveRight() {
    //As long as the character is not cut by the right side we can move
    if (this.x + 15 <= canvas.width - this.width) {
      //console.log(canvas.width);
      //console.log(this.x);
      this.x = this.x + 15;
    }
  }

  moveLeft() {
    //As long as the character is not cut by the left side we can move
    if (this.x - 15 >= 0) {
      //console.log(canvas.width);
      //console.log(this.x);
      this.x = this.x - 15;
    }
  }

  moveUp() {
    //As long as the character respect the height limit where the markers space are, its able to move
    if (this.y - 15 >= screenHeightLimit) {
      this.y = this.y - 15;
    }
  }

  moveDown() {
    //As long as the character is not cut by the down side we can move down
    if (this.y + 15 <= canvas.height - this.height) {
      //console.log(canvas.height);
      //console.log(this.y);
      this.y = this.y + 15;
    }
  }

}
