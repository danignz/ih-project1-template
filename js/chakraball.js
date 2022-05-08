class ChakraBall {
  constructor(charPositionX, charPositionY) {
    this.x = charPositionX;
    this.y = charPositionY;
    this.moveInterval = undefined;
  }

  _stopMove() {
    clearInterval(this.moveInterval);
    this.moveInterval = undefined;
    //console.log(this.moveInterval);
  }

  _setStart(charPositionX, charPositionY) {
    this.x = charPositionX;
    this.y = charPositionY;

    const limitTimes = 70;
    let i = 1;

    //console.log("START!");
    this.moveInterval = setInterval(() => {
      //console.log(`message ${i}, appeared after ${i++} seconds`);
      this.x = this.x + 40;
      if (i > limitTimes) {
        this._stopMove();
        //console.log("interval cleared!");
      }
    }, 100);
  }
}
