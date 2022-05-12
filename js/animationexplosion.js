class AnimationExplosion {
    constructor() {
      this.actionInterval = undefined;
      this.isExploding = undefined;
    }
    //Method to stop interval and reset its id
    _stopAction() {
      clearInterval(this.actionInterval);
      this.actionInterval = undefined;
    }
  
    _executeAnimationExplosion() {
     
      this.initFrame = 0;
      this.lasttFrame = 5;
      this.animationTime = 200;
      this.isExploding = true;
      //Each execution of actionInterval will cause to draw a different frame, due initFrame changed on switch statement and it will be readed by the Game method _drawAnimation
      this.actionInterval = setInterval(() => {
        //If its the last Animation frame, stop the interval
        if (this.initFrame >= this.lasttFrame) {
          this.isExploding = false;
          this._stopAction();
        }
        this.initFrame++;
      }, this.animationTime);
    }
  }
