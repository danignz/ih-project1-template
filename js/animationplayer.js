class AnimationPlayer {
  constructor() {
    this.initFrame = undefined;
    this.lasttFrame = undefined;
    this.animationTime = undefined;
    this.actionInterval = undefined;
  }
  //Method to stop interval and reset its id
  _stopAction() {
    clearInterval(this.actionInterval);
    this.actionInterval = undefined;
  }

  _executeAnimation(action) {
    switch (action) {
      case "energy":
        this.initFrame = 5;
        this.lasttFrame = 10;
        this.animationTime = 320;
        break;
      case "intro":
        this.initFrame = 12;
        this.lasttFrame = 17;
        this.animationTime = 500;
        break;
      case "kick":
        this.initFrame = 18;
        this.lasttFrame = 23;
        this.animationTime = 160;
        break;
      case "punch":
        this.initFrame = 25;
        this.lasttFrame = 30;
        this.animationTime = 160;
        break;
      case "special":
        this.initFrame = 32;
        this.lasttFrame = 37;
        this.animationTime = 220;
        break;
      default:
    }

    //Each execution of actionInterval will cause to draw a different frame, due initFrame changed on switch statement and it will be readed by the Game method _drawAnimation
    this.actionInterval = setInterval(() => {
      //If its the last Animation frame, stop the interval
      if (this.initFrame >= this.lasttFrame) {
        this._stopAction();
      }
      this.initFrame++;
    }, this.animationTime);
  }
}
