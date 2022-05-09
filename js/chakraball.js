class ChakraBall {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.moveInterval = undefined;
    this.moveIntervalWait = undefined;
  }

  //Method to stop interval and set initial values
  _stopMove() {
    clearInterval(this.moveInterval);
    this.moveInterval = undefined;
    this.x = undefined;
    this.y = undefined;
  }

  //Method to stop interval and reset its id
  _stopWait() {
    clearInterval(this.moveIntervalWait);
    this.moveIntervalWait = undefined;
  }

  //Method that sets the position where the chakraBall will be painted and also created two intervals.
  //The first one "moveIntervalWait" its to give the char enough time to finnish the animation of throwing the ball.
  //The second one "moveInterval" each fraction of time increases X position and auto stop itself where it reach time limit.
  //Each execution of moveInterval will cause to draw a different frame, due x its increasing and it will be readed by the Game method _drawChakraBall
  _setStart(initialXPosition, initialYPosition, summoner) {
    //Need to know the current position of char to paint the ball
    this.x = initialXPosition;
    this.y = initialYPosition;
    //Next vars needed to manage the moveInterval time limits, autofinnish painted ball when the variable reach a limit
    const limitTimes = 25;
    let i = 1;

    //the moveIntervalWait its only used to generate enough time for the action animation char's ends before to start the ChakraBall animation
    this.moveIntervalWait = setInterval(() => {
      this.moveInterval = setInterval(() => {
        this._stopWait(); //Stop the first interval, only waits for one time. When the chars execute the throwing
        if (summoner === "player"){
          this.x = this.x + 40;
        }else{
          this.x = this.x - 40;
        }
        if (i > limitTimes) {
          //When reach (limitTimes*100) seconds the interval stop itself (the ball acrossed the full width)
          this._stopMove();
        }
        i++;
        //console.log(this.x, this.y)
      }, 100);
    }, 1000);
  }
}
