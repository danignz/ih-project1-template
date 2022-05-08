class ChakraBall {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.moveInterval = undefined;
  }
  //Method to stop interval and reset its id
  _stopMove() {
    clearInterval(this.moveInterval);
    this.moveInterval = undefined;
    //console.log(this.moveInterval);
  }

  //Set the position where the chakraBall will be painted. Created a interval, where each fraction time increases X position and auto stop itself where it reach time limit.
  _setStart(charPositionX, charPositionY) {
    //Need to know the current position of char
    this.x = charPositionX;
    this.y = charPositionY;
    //Vars need to manage the Interval time Limits
    const limitTimes = 70;
    let i = 1;

    //console.log("START!");
    this.moveInterval = setInterval(() => {
      //console.log(`message ${i}, appeared after ${i++} seconds`);
      this.x = this.x + 40;
      if (i > limitTimes) {
        //When reach 7 seconds (limitTimes*100) the interval stop itself
        this._stopMove();
        //console.log("interval cleared!");
      }
      i++;
    }, 100);
  }
}
