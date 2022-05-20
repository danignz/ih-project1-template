class Enemy extends Player {
  moveLeft() {
    //As long as the enemy image is not cut by the left side we can move
    //The condition ableToAdvance checks if the fighters dont across each other in the X asis
    //When a chakraBall its running, enemy can not move
    if (
      Math.abs(this.x) - this.width - 15 >= 0 &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait &&
      this.ableToAdvance === true
    ) {
      this.x = this.x + 15;
      this.stateImg = 31;
    }
  }

  moveRight() {
    //As long as the enemy image is not cut by the right side we can move
    //When a chakraBall its running, enemy can not move
    if (
      Math.abs(this.x) + 15 <= canvas.width &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait
    ) {
      this.x = this.x - 15;
      this.stateImg = 24;
    }
  }
}
