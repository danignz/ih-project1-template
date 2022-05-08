class Game {
  constructor(context) {
    this.ctx = context;
    this.player = new Player(100, 230, characters[0]);
    this.enemy = new Enemy(-1000, 230, characters[1]);
  }

  _drawPlayer() {
    this.ctx.drawImage(
      this.player.charImages[0],
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );
  }

  _drawEnemy() {
    //Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis.
    this.ctx.scale(-1, 1);
    //console.log(this.enemy.x, this.enemy.y);
    //console.log(baseImgGB.height * 0.12);
    //console.log(baseImgGB.width * 0.12);
    this.ctx.drawImage(
      this.enemy.charImages[0],
      this.enemy.x,
      this.enemy.y,
      this.enemy.width,
      this.enemy.height
    );
    // Reset current transformation matrix to the identity matrix
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    //this.ctx.drawImage(baseImgGB, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
    //console.log(this.enemy.x, this.enemy.y);
  }

  _drawChakraBall() {
    //Only draw the ChakraBall if setInterval its undefined (that means that there are not another running in this moment)
    if (this.player.chakraBall.moveInterval) {
      this.ctx.drawImage(
        this.player.charImages[1],
        this.player.chakraBall.x,
        this.player.chakraBall.y,
        this.player.charImages[1].width * this.player.scale,
        this.player.charImages[1].height * this.player.scale
      );
    }
  }

  _assignControls() {
    // keyboard controls
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "ArrowUp":
          this.player.moveUp();
          break;
        case "ArrowDown":
          this.player.moveDown();
          break;
        case "Space":
          //Only creates a new ChakraBall if setInterval its undefined (that means that there are not another running in this moment)
          //Inovke _setStart method, it need to know the coordinates of the char's current position, and add to the X-asis its width to be draw in the right place
          if (!this.player.chakraBall.moveInterval) {
            this.player.chakraBall._setStart(
              this.player.x + this.player.width,
              this.player.y
            );
          }
          break;
        default:
          break;
      }
    });
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawPlayer();
    this._drawEnemy();
    this._drawChakraBall();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}
