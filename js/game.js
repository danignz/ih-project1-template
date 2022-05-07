class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player(100, 230, characters[0]);
    this.enemy = new Enemy(-1000, 230, characters[1]);
  }

  _drawPlayer() {
    console.log(this.imagePath);
    this.ctx.drawImage(baseImgGB, this.player.x, this.player.y, this.player.width, this.player.height);
  }

  _generatePlayer() {
    this.player._assignImagePath();
  }

  _drawEnemy() {
    //Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. 
    this.ctx.scale(-1,1);
    console.log(this.enemy.x, this.enemy.y);
    //console.log(baseImgGB.height * 0.12);
    //console.log(baseImgGB.width * 0.12);
    this.ctx.drawImage(baseImgCE, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
    // Reset current transformation matrix to the identity matrix
    //this.ctx.setTransform(1,0,0,1,0,0);
    //this.ctx.drawImage(baseImgGB, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
    //console.log(this.enemy.x, this.enemy.y);
  }

  _generateEnemy() {
    this.enemy._assignImagePath();
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.moveRight();
          break;
        case 'ArrowUp':
            this.player.moveUp();
          break;
        case 'ArrowDown':
            this.player.moveDown();
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
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._generatePlayer();
    this._generateEnemy();
    this._update();
  }
}