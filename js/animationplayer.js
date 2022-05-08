class AnimationPlayer {
  constructor() {
    this.initFrame = undefined;
    this.lasttFrame = undefined;
    this.actionInterval = undefined;
  }
  //Method to stop interval and reset its id
  _stopAction() {
    clearInterval(this.actionInterval);
    this.actionInterval = undefined;
    //console.log(this.moveInterval);
  }

  executeAnimation(action) {
    switch (action) {
      case "energy":
        this.initFrame = 5;
        this.lasttFrame = 10;
        break;
      case "intro":
        this.initFrame = 12;
        this.lasttFrame = 17;
        break;
      case "kick":
        this.initFrame = 18;
        this.lasttFrame = 23;
        break;
      case "punch":
        this.initFrame = 25;
        this.lasttFrame = 30;
        break;
      case "special":
        this.initFrame = 32;
        this.lasttFrame = 37;
        break;
      default:
    }

    //console.log("START!");
    this.actionInterval = setInterval(() => {
      //console.log(`message ${i}, appeared after ${i++} seconds`);

      if (this.initFrame <= this.lasttFrame) {
        console.log(this.initFrame);
        this.initFrame++;
      } else {
        this._stopAction();
        console.log(this.initFrame);
      }
    }, 200);
  }
}
