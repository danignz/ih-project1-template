class ChakraBall {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.moveInterval = undefined;
    this.moveIntervalWait = undefined;
    this.lastExplosionX = undefined;
    this.lastExplosionY = undefined;
    this.chakraExplosionAni = new AnimationExplosion();
    this.explosionImages = explosionSequence;
    this.kameSound0 = new sound("./sounds/kame0.wav");
    this.kameSound1 = new sound("./sounds/kame1.wav");
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
  //The purpose of the first one "moveIntervalWait" its to give the char enough time to finnish the animation of throwing the ball.
  //The second one "moveInterval" in each fraction of time increases X position and auto stop itself where it reach time limit.
  //Each execution of moveInterval will cause to draw a different frame due X increasing and it will be readed later by the Game method _drawChakraBall
  _setStart(initialXPosition, initialYPosition, summoner) {
    //Need to know the current position of char to paint the ball
    this.x = initialXPosition - 60;
    this.y = initialYPosition;
    //Next vars needed to manage the moveInterval time limits, autostop to paint the ball when the variable reach a certain limit.
    const limitTimes = 25;
    let i = 1;
    //The moveIntervalWait its only used to generate enough time for the action animation char's ends before to start the ChakraBall animation
    this.moveIntervalWait = setInterval(() => {
      this.moveInterval = setInterval(() => {
        this._stopWait(); //Stop the first interval, only wait for one time till the char execute the throwing animation
        if (summoner === "player") {
          //depen on if the summoner is the player or the enemy will move the ball in the correct direction
          this.x = this.x + 40;
        } else {
          this.x = this.x - 40;
        }
        let randomYDirection = Math.floor(Math.random() * 7);
        //Generate a movement effect over Y axis for the chakraball
        if (randomYDirection % 2 === 0) {
          this.y = this.y - randomYDirection;
        } else {
          this.y = this.y + randomYDirection;
        }
        if (i > limitTimes) {
          //When reach (limitTimes*100) seconds, the interval stop itself (the ball acrossed the full width)
          this._stopMove();
        }
        i++;
      }, 50);
    }, 790);
  }
}
