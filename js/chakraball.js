class ChakraBall {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.moveInterval = undefined;
    this.moveIntervalWait = undefined;
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
    const limitTimes = 25;
    let i = 1;

    //the first set interval its only use to wait the animation ends to start the ChakraBall animation
    this.moveIntervalWait = setInterval(() => {
      this.moveInterval = setInterval(() => {
        clearInterval(this.moveIntervalWait);
        this.moveIntervalWait = undefined;

        //console.log(`message ${i}, appeared after ${i++} seconds`);
        this.x = this.x + 40;
        if (i > limitTimes) {
          //When reach (limitTimes*100) seconds the interval stop itself
          this._stopMove();

          //console.log("interval cleared!");
        }
        i++;
      }, 100);
    }, 1000);
  }
}
