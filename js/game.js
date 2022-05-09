class Game {
  constructor(context) {
    this.ctx = context;
    this.player = new Player(100, 230, characters[0]);
    this.enemy = new Enemy(-500, 230, characters[1]);
    this.intervalEnemyIA = undefined;
  }

  //Method to draw the player at the screen
  _drawPlayer() {
    this.ctx.drawImage(
      this.player.charImages[0],
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );
  }

  //Method to draw the enemy at the screen
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

  //Method to draw the ChakraBall
  _drawChakraBall() {
    //Only draw the ChakraBall if moveIntervalWait its undefined (means that its not a wait for the char animation) and
    //if moveInterval its not undefined (that means that chakraball its running)
    if (
      this.player.chakraBall.moveInterval &&
      !this.player.chakraBall.moveIntervalWait
    ) {
      this.ctx.drawImage(
        this.player.charImages[1],
        this.player.chakraBall.x,
        this.player.chakraBall.y,
        this.player.charImages[1].width * this.player.scale,
        this.player.charImages[1].height * this.player.scale
      );
    }
  }

  //Method to draw and Animation
  _drawAnimation() {
    //Only draw the animation if actionInterval its not undefined (that means that and animation its running)
    //The imagine to show everytime will depen of initFrame that its going to change everytime due a actionInterval that increases the freme everytime
    if (this.player.charAnimaton.actionInterval) {
      this._clean();
      this._drawEnemy();
      this._drawChakraBall();
      this.ctx.drawImage(
        this.player.charImages[this.player.charAnimaton.initFrame],
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height
      );
    }
  }

  // keyboard controls
  _assignControls() {
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
          //Only creates a new ChakraBall if both setInterval are undefined (that means that there are not another running in this moment)
          //The moveIntervalWait manages the duration of char's animation before throwing the ball. Undefined means that there are not another running in this moment.
          if (
            !this.player.chakraBall.moveInterval &&
            !this.player.chakraBall.moveIntervalWait
          ) {
            this.player.charAnimaton._executeAnimation("special");
            //Invoke to _setStart method, it needs to know the coordinates of the char's current position, and add to the X-asis its width to be draw in the right place
            this.player.chakraBall._setStart(
              this.player.x + this.player.width,
              this.player.y
            );
          }
          break;
        case "KeyA":
          //To execute the action its needed that not chakraball its running at this moment and either there is not another animation of this char running right now
          if (
            !this.player.chakraBall.moveInterval &&
            !this.player.chakraBall.moveIntervalWait &&
            this.player.charAnimaton.actionInterval === undefined
          ) {
            this.player.charAnimaton._executeAnimation("punch");
          }
          break;
        case "KeyS":
          //To execute the action its needed that not chakraball its running at this moment and either there is not another animation of this char running right now
          if (
            !this.player.chakraBall.moveInterval &&
            !this.player.chakraBall.moveIntervalWait &&
            this.player.charAnimaton.actionInterval === undefined
          ) {
            this.player.charAnimaton._executeAnimation("kick");
          }
          break;
        case "KeyD":
          //To execute the action its needed that not chakraball its running at this moment and either there is not another animation of this char running right now
          if (
            !this.player.chakraBall.moveInterval &&
            !this.player.chakraBall.moveIntervalWait &&
            this.player.charAnimaton.actionInterval === undefined
          ) {
            this.player.charAnimaton._executeAnimation("energy");
          }
          break;
        case "KeyU":
          //To execute the action its needed that not chakraball its running at this moment and either there is not another animation of this char running right now
          if (
            !this.player.chakraBall.moveInterval &&
            !this.player.chakraBall.moveIntervalWait &&
            this.player.charAnimaton.actionInterval === undefined
          ) {
            this.player.charAnimaton._executeAnimation("intro");
          }
          break;
        default:
          break;
      }
    });
  }

  _checkPlayerAdvancedFront() {
    //Method check if the player can move to the right side depend on if not across the position of the enemy
    if (
      this.player.x + this.player.width - 10 <=
      Math.abs(this.enemy.x) - this.enemy.width
    ) {
      this.player.ableToAdvance = true;
    } else {
      this.player.ableToAdvance = false;
    }
    // console.log(this.player.ableToAdvance);
  }

  _checkEnemyAdvancedFront() {
    //Method check if the enemy can move to the left side depend on if not across the position of the player
    if (
      this.player.x + this.player.width - 10 <=
      Math.abs(this.enemy.x) - this.enemy.width
    ) {
      this.enemy.ableToAdvance = true;
    } else {
      this.enemy.ableToAdvance = false;
    }
    //console.log(this.enemy.ableToAdvance);
  }

  _manageEnemyIA() {
    // this.enemy.moveLeft();
    //this.enemy.moveRight();

    //Only creates a new ChakraBall if both setInterval are undefined (that means that there are not another running in this moment)
    //The moveIntervalWait manages the duration of char's animation before throwing the ball. Undefined means that there are not another running in this moment.
    /*
   
    if (
      !this.player.chakraBall.moveInterval &&
      !this.player.chakraBall.moveIntervalWait
    ) {
      this.player.charAnimaton._executeAnimation("special");
      //Invoke to _setStart method, it needs to know the coordinates of the char's current position, and add to the X-asis its width to be draw in the right place
      this.player.chakraBall._setStart(
        this.player.x + this.player.width,
        this.player.y
      );
    }

*/

    if (
      !this.player.chakraBall.moveInterval &&
      !this.player.chakraBall.moveIntervalWait
    ) {
      this.player.charAnimaton._executeAnimation("special");
      //Invoke to _setStart method, it needs to know the coordinates of the char's current position, and add to the X-asis its width to be draw in the right place
      this.player.chakraBall._setStart(
        this.player.x + this.player.width,
        this.player.y
      );
    }
  }
  _checkCollisions() {
    console.log(
      "Player Position Status:",
      "\nX-Left= ",
      this.player.x,
      "\nX-Right=",
      this.player.x + this.player.width,
      "\nWidth= ",
      this.player.width,
      "\nY-Top= ",
      this.player.y,
      "\nY-Button= ",
      this.player.y + this.player.height,
      "\nHeight= ",
      this.player.height
    );

    console.log(
      "Enemy Position Status:",
      "\nX-Left= ",
      Math.abs(this.enemy.x) - this.enemy.width,
      "\nX-Right=",
      Math.abs(this.enemy.x),
      "\nWidth= ",
      this.enemy.width,
      "\nY-Top= ",
      this.enemy.y,
      "\nY-Button= ",
      this.enemy.y + this.enemy.height,
      "\nHeight= ",
      this.enemy.height
    );

    console.log(
      "Player ChakraBall Status:",
      "\nX-Left= ",
      this.player.chakraBall.x,
      "\nX-Right=",
      this.player.chakraBall.x +
        this.player.charImages[1].width * this.player.scale,
      "\nWidth= ",
      this.player.charImages[1].width * this.player.scale,
      "\nY-Top= ",
      this.player.chakraBall.y,
      "\nY-Button= ",
      this.player.chakraBall.y +
        this.player.charImages[1].height * this.player.scale,
      "\nHeight= ",
      this.player.charImages[1].height * this.player.scale
    );

    console.log(
      "Enemy ChakraBall Status:",
      "\nX-Left= ",
      this.enemy.chakraBall.x,
      "\nX-Right=",
      this.enemy.chakraBall.x +
        this.enemy.charImages[1].width * this.enemy.scale,
      "\nWidth= ",
      this.enemy.charImages[1].width * this.enemy.scale,
      "\nY-Top= ",
      this.enemy.chakraBall.y,
      "\nY-Button= ",
      this.enemy.chakraBall.y +
        this.enemy.charImages[1].height * this.enemy.scale,
      "\nHeight= ",
      this.enemy.charImages[1].height * this.enemy.scale
    );
  }

  //Method to clear the screen everytime
  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  //Method to refresh the screen everytime
  _update() {
    this._clean();
    this._drawPlayer();
    this._drawEnemy();
    this._drawChakraBall();
    this._drawAnimation();
    this._checkPlayerAdvancedFront();
    this._checkEnemyAdvancedFront();
    //    this._checkCollisions();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
    this.intervalEnemyIA = setInterval(() => {
      this._manageEnemyIA();
      this._checkCollisions();
    }, 4000);
    this._update();
  }
}
