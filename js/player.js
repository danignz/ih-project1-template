class Player {
  constructor(x, y, charObject) {
    this.x = x;
    this.y = y;
    // this.width = width;
    //  this.height = height;
    this.width = `baseImg` + `${charObject.abbreviation}`.width * charObject.scale;
    this.height = baseImgGB.height * charObject.scale;
    this.charName = charObject.name;
    this.imagePath = undefined;
    this.chakraBall = new ChakraBall;
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

  _assignImagePath() {
    //this.imagePath = `./img/` + `${this.charName}`;
    this.imagePath = `./img/` + `${this.charName}/` + `base.png`;
    //console.log(this.imagePath);
  }

  specialAttack(){

    this.chakraBall._assignImage();
  }  
}
