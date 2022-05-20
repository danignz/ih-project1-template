class Game {
  constructor(context) {
    this.ctx = context;
    this.player = new Player(100, 200, characters[player], playerMarkerImg);
    this.enemy = new Enemy(-900, 200, characters[enemy], enemyMarkerImg);
    this.intervalEnemyIA = undefined;
    this.intervalGameOver = undefined;
    this.intervalWaitGameOver = undefined;
    this.intervalImg = undefined;
    this.intervalTimeOverId = undefined;
    this.currentTime = 90;
    this.fight0Sound = new sound("./sounds/meleemisses.wav");
    this.fight1Sound = new sound("./sounds/weakkick.wav");
    this.fight2Sound = new sound("./sounds/weakpunch.wav");
    this.fight3Sound = new sound("./sounds/strongpunch.wav");
    this.fight4Sound = new sound("./sounds/strongkick.wav");
    this.timeOverSound = new sound("./sounds/timeover.wav");
    this.winner = new sound("./sounds/winner.wav");
    this.loser = new sound("./sounds/loser.wav");
  }

  //Method to draw the static player at the screen
  _drawPlayer() {
    //When an animation its running, dont have to draw the static player. Not animation executing means an undefined value by default
    if (!this.player.charAnimaton.actionInterval) {
      this.ctx.drawImage(
        this.player.charImages[this.player.stateImg],
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height
      );
    }
  }

  //Method to draw the enemy at the screen
  _drawEnemy() {
    //When an animation its running, dont have to draw the static enemy. Not animation executing means an undefined value by default
    if (!this.enemy.charAnimaton.actionInterval) {
      //Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis.
      //Need to inverter the position of the enemy for the fighters see in front each other, due only there are png's images in one direction.
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(
        this.enemy.charImages[this.enemy.stateImg],
        this.enemy.x,
        this.enemy.y,
        this.enemy.width,
        this.enemy.height
      );
      // Reset current transformation matrix to the identity matrix. Its needed to recover the default values of the horizontal axis to draw another elements at the screen.
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }

  //Method to draw the player's ChakraBall
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

  //Method to draw the enemy's ChakraBall
  _drawChakraBallE() {
    //Only draw the ChakraBall if moveIntervalWait its undefined (means that its not a wait for the enemy animation) and
    //if moveInterval its not undefined (that means that chakraball its running)
    if (
      this.enemy.chakraBall.moveInterval &&
      !this.enemy.chakraBall.moveIntervalWait
    ) {
      this.ctx.drawImage(
        this.enemy.charImages[1],
        this.enemy.chakraBall.x,
        this.enemy.chakraBall.y,
        this.enemy.charImages[1].width * this.enemy.scale,
        this.enemy.charImages[1].height * this.enemy.scale
      );
    }
  }

  //Method to draw a player animation
  _drawAnimation() {
    //Only draw the animation if actionInterval its not undefined (that means that an animation its running)
    //The image to show will depen of the current initFrame that its going to change everytime due to the actionInterval that will increase the frame
    if (this.player.charAnimaton.actionInterval) {
      this.ctx.drawImage(
        this.player.charImages[this.player.charAnimaton.initFrame],
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height
      );
    }
  }

  //Method to draw a enemy animation
  _drawAnimationE() {
    //Only draw the animation if actionInterval its not undefined (that means that an animation its running)
    //The image to show will depen of the current initFrame that its going to change everytime due to the actionInterval that will increase the frame
    if (this.enemy.charAnimaton.actionInterval) {
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(
        this.enemy.charImages[this.enemy.charAnimaton.initFrame],
        this.enemy.x,
        this.enemy.y,
        this.enemy.width,
        this.enemy.height
      );
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }

  //Method to draw a explosion animation
  _drawExplosionAnimation() {
    //Only draw the animation if actionInterval its not undefined (that means that an animation its running)
    //The image to show will depen of the current initFrame that its going to change everytime due to the actionInterval that will increase the frame
    if (this.player.chakraBall.chakraExplosionAni.isExploding) {
      this.ctx.drawImage(
        this.player.chakraBall.explosionImages[
          this.player.chakraBall.chakraExplosionAni.initFrame
        ],
        this.player.chakraBall.lastExplosionX,
        this.player.chakraBall.lastExplosionY,
        this.player.width,
        this.player.height
      );
    } else if (this.enemy.chakraBall.chakraExplosionAni.isExploding) {
      this.ctx.drawImage(
        this.enemy.chakraBall.explosionImages[
          this.enemy.chakraBall.chakraExplosionAni.initFrame
        ],
        this.enemy.chakraBall.lastExplosionX,
        this.enemy.chakraBall.lastExplosionY,
        this.enemy.width,
        this.enemy.height
      );
    }
  }

  //keyboard controls
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
            !this.player.chakraBall.moveIntervalWait &&
            this.player.charAnimaton.actionInterval === undefined
          ) {
            //Plays the player's action animation linked to Chakraball throwing
            this.player.charAnimaton._executeAnimation("energy");
            this.player.energyInterval = setTimeout(() => {
              this.player.chakraBall.kameSound0.play();
              //Plays the player's action animation linked to Chakraball throwing
              this.player.charAnimaton._executeAnimation("special");
              //Invoke to _setStart method. It needs to know the coordinates of the char's current position and add to the X-asis its width to be draw in the right place
              this.player.chakraBall._setStart(
                this.player.x + this.player.width,
                this.player.y,
                "player"
              );
              clearInterval(this.player.energyInterval);
            }, 1000);
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
            if (this.enemy.canReceiveDamage === true) {
              this.enemy.receiveDamage(this.player.punchAttack());
              //sets hurt image
              this.enemy.stateImg = 11;
            }
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
            if (this.enemy.canReceiveDamage === true) {
              this.enemy.receiveDamage(this.player.kickAttack());
              //sets hurt image
              this.enemy.stateImg = 11;
            }
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
      this.player.x + this.player.width - 50 <=
      Math.abs(this.enemy.x) - this.enemy.width + 50
    ) {
      this.player.ableToAdvance = true;
    } else {
      this.player.ableToAdvance = false;
    }
  }

  _checkEnemyAdvancedFront() {
    //Method check if the enemy can move to the left side depend on if not across the position of the player
    if (
      this.player.x + this.player.width - 50 <=
      Math.abs(this.enemy.x) - this.enemy.width + 50
    ) {
      this.enemy.ableToAdvance = true;
    } else {
      this.enemy.ableToAdvance = false;
    }
  }

  //Method that controls the machine's IA
  _manageEnemyIA() {
    let randomAction = Math.floor(Math.random() * 13); // expected output: between 0-14;
    if (
      !this.enemy.chakraBall.moveInterval &&
      !this.enemy.chakraBall.moveIntervalWait &&
      this.enemy.charAnimaton.actionInterval === undefined
    ) {
      for (let i = 0; i < randomAction; i++) {
        if (this.enemy.ableToAdvance === true) {
          this.enemy.moveLeft();
          this._checkEnemyAdvancedFront();
        }
      }
      if (randomAction % 4 !== 0) {
        for (let i = 0; i < randomAction; i++) {
          if (
            this.player.y - this.enemy.y < 0 &&
            this.player.y - this.enemy.y < -16
          ) {
            this.enemy.moveUp();
          } else if (
            this.player.y - this.enemy.y > 0 &&
            this.player.y - this.enemy.y > 16
          ) {
            this.enemy.moveDown();
          }
        }
      }

      switch (randomAction) {
        case 0:
          for (let i = 0; i < randomAction; i++) {
            this.enemy.moveRight();
          }
          break;
        case 1:
          for (let i = 0; i < randomAction; i++) {
            this.enemy.moveUp();
          }
          break;
        case 2:
          for (let i = 0; i < randomAction; i++) {
            this.enemy.moveDown();
          }
          break;
        case 3:
        case 4:
        case 5:
          this.enemy.charAnimaton._executeAnimation("punch");
          if (this.player.canReceiveDamage === true) {
            this.player.receiveDamage(this.enemy.punchAttack());
            //sets hurt image
            this.player.stateImg = 11;
          }
          break;
        case 6:
        case 7:
        case 8:
          this.enemy.charAnimaton._executeAnimation("kick");
          if (this.player.canReceiveDamage === true) {
            this.player.receiveDamage(this.enemy.kickAttack());
            //sets hurt image
            this.player.stateImg = 11;
          }
          break;
        case 9:
          for (let i = 0; i < randomAction; i++) {
            this.enemy.moveRight();
          }
          this.enemy.charAnimaton._executeAnimation("energy");
          break;
        case 10:
         this.enemy.charAnimaton._executeAnimation("intro");
        case 11:
          for (let i = 0; i < randomAction; i++) {
            this.enemy.moveRight();
          }
        case 12:
          //Only creates a new ChakraBall if both setInterval are undefined (that means that there are not another running in this moment)
          //The moveIntervalWait manages the duration of char's animation before throwing the ball. Undefined means that there are not another running in this moment.
          if (
            !this.enemy.chakraBall.moveInterval &&
            !this.enemy.chakraBall.moveIntervalWait &&
            this.enemy.charAnimaton.actionInterval === undefined
          ) {
            //Plays the enemy's action animation linked to Chakraball throwing
            this.enemy.charAnimaton._executeAnimation("energy");
            this.enemy.energyInterval = setTimeout(() => {
              this.enemy.chakraBall.kameSound1.play();
              //Plays the enemy's action animation linked to Chakraball throwing
              this.enemy.charAnimaton._executeAnimation("special");
              //Invoke to _setStart method, it needs to know the coordinates of the enemy's current position and add to the X-asis its width to be draw in the right place
              this.enemy.chakraBall._setStart(
                Math.abs(this.enemy.x) - this.enemy.width,
                this.enemy.y,
                "enemy"
              );
              clearInterval(this.enemy.energyInterval);
            }, 1000);
          }
          break;
      }
    }
  }

  //The most important method. Manage all the elements collisions and update the life of players if during a collision there are a action that produce damage.
  _checkCollisions() {
    this.player.canReceiveDamage = false;
    this.enemy.canReceiveDamage = false;

    //Manage the chakraball's collitions
    //Two chakraballs collides with each other. If only for visual purpose.
    //The first condition checks if the enemy's chakraball completely through the player's ball. Check x asis
    if (
      Math.abs(this.enemy.chakraBall.x) -
        this.enemy.charImages[1].width * this.enemy.scale -
        this.player.chakraBall.x +
        80 <
        41 &&
      //These condition checks if the enemy's chakraball upper corner its inside the player's ball. Check y asis
      ((this.enemy.chakraBall.y + 60 <= this.player.chakraBall.y + 60 &&
        this.enemy.chakraBall.y +
          this.enemy.charImages[1].height * this.enemy.scale -
          60 >=
          this.player.chakraBall.y + 60) ||
        //These condition checks if the enemy's chakraball botton corner its inside the player's ball. Check y asis
        (this.enemy.chakraBall.y + 60 <=
          this.player.chakraBall.y +
            this.player.charImages[1].height * this.player.scale -
            60 &&
          this.enemy.chakraBall.y +
            this.enemy.charImages[1].height * this.enemy.scale -
            60 >=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale -
              60) ||
        //These condition checks if the player's chakraball its smaller than enemy's ball and it across inside it. Check y asis
        (this.enemy.chakraBall.y + 60 <= this.player.chakraBall.y + 60 &&
          this.enemy.chakraBall.y +
            this.enemy.charImages[1].height * this.enemy.scale -
            60 >=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale -
              60) ||
        //These condition checks if the enemy's chakraball its smaller than player's ball and it across inside it. Check y asis
        (this.enemy.chakraBall.y + 60 >= this.player.chakraBall.y + 60 &&
          this.enemy.chakraBall.y +
            this.enemy.charImages[1].height * this.enemy.scale -
            60 <=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale -
              60))
    ) {
      //Save the collition Point to draw Explosion Animation
      this.player.chakraBall.lastExplosionX = this.player.chakraBall.x;
      this.player.chakraBall.lastExplosionY = this.player.chakraBall.y;

      //if it collides the animation will stop, and launch the explosion animation and sound
      this.player.chakraBall._stopMove();
      this.enemy.chakraBall._stopMove();
      this.player.chakraBall.kameSound0.stop();
      this.enemy.chakraBall.kameSound1.stop();
      this.player.chakraBall.chakraExplosionAni._executeAnimationExplosion();
      this.player.chakraBall.chakraExplosionAni.explosion2Sound.play();
    }

    //Enemy collides with a chakraball
    if (
      //check if player's chakraball across inside the enemy in x asis
      Math.abs(this.enemy.x) - this.enemy.width - this.player.chakraBall.x <
        41 &&
      this.player.chakraBall.x < canvas.width &&
      //check if player's chakraball across inside the enemy in y asis
      ((this.enemy.y + 90 <= this.player.chakraBall.y &&
        this.enemy.y + this.enemy.height - 40 >= this.player.chakraBall.y) ||
        //These condition checks if the player's chakraball botton corner its inside the enemy. Check y asis
        (this.enemy.y + 90 <=
          this.player.chakraBall.y +
            this.player.charImages[1].height * this.player.scale &&
          this.enemy.y + this.enemy.height - 40 >=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale) ||
        //These condition checks if the player's chakraball upper corner its inside the enemy. Check y asis
        (this.enemy.y + 90 <= this.player.chakraBall.y &&
          this.enemy.y + this.enemy.height - 40 >=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale) ||
        //These condition checks if the player's chakraball its inside the enemy's body. Check y asis
        (this.enemy.y + 90 >= this.player.chakraBall.y &&
          this.enemy.y + this.enemy.height - 40 <=
            this.player.chakraBall.y +
              this.player.charImages[1].height * this.player.scale))
      //These condition checks if the enemy's body its inside the chakraball. Its an hipotetic case, because chars by default are bigger than chakraball. Check y asis
    ) {
      //Save the collition Point to draw Explosion Animation
      this.player.chakraBall.lastExplosionX = this.player.chakraBall.x;
      this.player.chakraBall.lastExplosionY = this.player.chakraBall.y;

      //This means that chakraball hurts enemy. Update the enemy damage and launch the explosion sound and animation.
      this.player.chakraBall._stopMove();
      this.enemy.receiveDamage(this.player.specialAttack());
      this.player.chakraBall.chakraExplosionAni._executeAnimationExplosion();
      this.player.chakraBall.kameSound0.stop();
      this.player.chakraBall.chakraExplosionAni.explosionSound.play();
      //sets hurt image
      this.enemy.stateImg = 11;
    }

    //Check if GameOver
    //if player dies show other image
    if (this.player.health <= 0) {
      this.player.stateImg = 2;
      this._playShowGameOver();
    } else if (this.enemy.health <= 0) {
      //if enemy dies show other image
      this.enemy.stateImg = 2;
      this._playShowGameOver();
    }

    //Player collides with a chakraball
    if (
      //check if enemy's chakraball across inside the player in x asis
      Math.abs(this.enemy.chakraBall.x) - this.player.x < 41 &&
      //check if enemy's chakraball across inside the player in y asis
      ((this.player.y + 90 <= this.enemy.chakraBall.y &&
        this.player.y + this.player.height - 40 >= this.enemy.chakraBall.y) ||
        //These condition checks if the enemy's chakraball botton corner its inside the player. Check y asis
        (this.player.y + 90 <=
          this.enemy.chakraBall.y +
            this.enemy.charImages[1].height * this.enemy.scale &&
          this.player.y + this.player.height - 40 >=
            this.enemy.chakraBall.y +
              this.enemy.charImages[1].height * this.enemy.scale) ||
        //These condition checks if the enemy's chakraball upper corner its inside the player. Check y asis
        (this.player.y + 90 <= this.enemy.chakraBall.y &&
          this.player.y + this.player.height - 40 >=
            this.enemy.chakraBall.y +
              this.enemy.charImages[1].height * this.enemy.scale) ||
        //These condition checks if the enemy's chakraball its inside the player's body. Check y asis
        (this.player.y + 90 >= this.enemy.chakraBall.y &&
          this.player.y + this.player.height - 40 <=
            this.enemy.chakraBall.y +
              this.enemy.charImages[1].height * this.enemy.scale))
      //These condition checks if the player's body its inside the chakraball. Its an hipotetic case, because chars by default are bigger than chakraball. Check y asis
    ) {
      //Save the collition Point to draw Explosion Animation
      this.enemy.chakraBall.lastExplosionX = Math.abs(this.enemy.chakraBall.x);
      this.enemy.chakraBall.lastExplosionY = this.enemy.chakraBall.y;

      //This means that chakraball hurts player
      this.enemy.chakraBall._stopMove();
      this.player.receiveDamage(this.enemy.specialAttack());
      this.enemy.chakraBall.kameSound1.stop();
      this.enemy.chakraBall.chakraExplosionAni._executeAnimationExplosion();
      this.enemy.chakraBall.chakraExplosionAni.explosionSound.play();
      //sets hurt image
      this.player.stateImg = 11;
    }

    //Check if GameOver
    //if player dies show other image
    if (this.player.health <= 0) {
      this.player.stateImg = 2;
      this._playShowGameOver();
    } else if (this.enemy.health <= 0) {
      //if enemy dies show other image
      this.enemy.stateImg = 2;
      this._playShowGameOver();
    }

    //Checks if player and enemy can fight
    if (
      //check if player if close to the enemy in x asis
      this.player.ableToAdvance === false &&
      this.enemy.ableToAdvance === false &&
      //check if player if close to the enemy in y asis
      ((this.enemy.y <= this.player.y + 130 &&
        this.enemy.y + this.enemy.height >= this.player.y + 130) ||
        (this.enemy.y <=
          this.player.y +
            this.player.charImages[0].height * this.player.scale -
            130 &&
          this.enemy.y + this.enemy.height >=
            this.player.y +
              this.player.charImages[0].height * this.player.scale -
              130) ||
        (this.enemy.y <= this.player.y + 130 &&
          this.enemy.y + this.enemy.height >=
            this.player.y +
              this.player.charImages[0].height * this.player.scale -
              130) ||
        (this.enemy.y >= this.player.y + 130 &&
          this.enemy.y + this.enemy.height <=
            this.player.y +
              this.player.charImages[0].height * this.player.scale -
              130))
    ) {
      //This statement manage the audio when fighters are hitting each other
      if (
        this.enemy.charAnimaton.actionInterval &&
        this.player.charAnimaton.actionInterval
      ) {
        if (!this.intervalSound) {
          this.intervalSound = setTimeout(() => {
            const randomSound = Math.floor(Math.random() * 5);
            switch (randomSound) {
              case 0:
                this.fight0Sound.play();
                break;
              case 1:
                this.fight1Sound.play();
                break;
              case 2:
                this.fight2Sound.play();
                break;
              case 3:
                this.fight3Sound.play();
                break;
              case 4:
                this.fight4Sound.play();
                break;
              default:
            }

            clearInterval(this.intervalSound);
            this.intervalSound = undefined;
          }, 700);
        }
      }
      //if the conditions are met they can be hit and get damage
      this.player.canReceiveDamage = true;
      this.enemy.canReceiveDamage = true;
    }

    //Check if GameOver
    //if player dies show other image
    if (this.player.health <= 0) {
      this.player.stateImg = 2;
      this._playShowGameOver();
    } else if (this.enemy.health <= 0) {
      //if enemy dies show other image
      this.enemy.stateImg = 2;
      this._playShowGameOver();
    }

    //if the time is out the game ends
    if (this.currentTime <= 0) {
      this.timeOverSound.play();
      this._playShowGameOver();
    }
  }

  //Method to draw the markers and update it
  _drawMarkers(char) {
    let imgMarker = 10;

    if (char === "player") {
      if (this.player.health >= 90) {
        imgMarker = 10;
      } else if (this.player.health >= 80) {
        imgMarker = 9;
      } else if (this.player.health >= 70) {
        imgMarker = 8;
      } else if (this.player.health >= 60) {
        imgMarker = 7;
      } else if (this.player.health >= 50) {
        imgMarker = 6;
      } else if (this.player.health >= 40) {
        imgMarker = 5;
      } else if (this.player.health >= 30) {
        imgMarker = 4;
      } else if (this.player.health >= 20) {
        imgMarker = 3;
      } else if (this.player.health >= 10) {
        imgMarker = 2;
      } else if (this.player.health >= 1) {
        imgMarker = 1;
      } else if (this.player.health <= 0) {
        imgMarker = 0;
      }
      this.ctx.drawImage(this.player.marker[imgMarker], 0, 0, 350, 35);
    } else {
      if (this.enemy.health >= 90) {
        imgMarker = 10;
      } else if (this.enemy.health >= 80) {
        imgMarker = 9;
      } else if (this.enemy.health >= 70) {
        imgMarker = 8;
      } else if (this.enemy.health >= 60) {
        imgMarker = 7;
      } else if (this.enemy.health >= 50) {
        imgMarker = 6;
      } else if (this.enemy.health >= 40) {
        imgMarker = 5;
      } else if (this.enemy.health >= 30) {
        imgMarker = 4;
      } else if (this.enemy.health >= 20) {
        imgMarker = 3;
      } else if (this.enemy.health >= 10) {
        imgMarker = 2;
      } else if (this.enemy.health >= 1) {
        imgMarker = 1;
      } else if (this.enemy.health <= 0) {
        imgMarker = 0;
      }
      this.ctx.drawImage(this.enemy.marker[imgMarker], 650, 0, 350, 35);
    }
  }

  //Method to announce the winner, its a preview state before GameOver Screen
  _playShowGameOver() {
    //stops Game Timer interval
    clearInterval(this.intervalTimeOverId);
    this.intervalTimeOverId = undefined;
    //stops IA and player base img interval
    clearInterval(this.intervalEnemyIA);
    clearInterval(this.intervalImg);
    //waits to end current animation before to draw
    this.intervalWaitGameOver = setTimeout(() => {
      clearInterval(this.intervalWaitGameOver);
      this._clean();
      this._drawEnemy();
      this._drawPlayer();
      this._drawMarkers("player");
      this._drawMarkers("enemy");

      if (this.player.health <= 0 || this.player.health <= this.enemy.health) {
        this.ctx.drawImage(lose, 350, 100, 300, 300);
        this.loser.play();
      } else {
        this.ctx.drawImage(win, 350, 100, 300, 300);
        this.winner.play();
      }

      this.intervalGameOver = setTimeout(() => {
        clearInterval(this.intervalGameOver);
        this._gameOver();
      }, 4000);
    }, 1000);
  }

  //Manage the game when its over
  _gameOver() {
    const finalPage = document.getElementById("final-page");
    finalPage.style = "display: flex";
    const canvas = document.getElementById("canvas");
    canvas.style = "display: none;";
  }

  //Method to draw the main Timer
  _drawTimer() {
    this.ctx.strokeText(this.currentTime, 475, 35);
    this.ctx.fillText(this.currentTime, 475, 35);
  }

  //Method to clean the screen everytime
  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  //Method to refresh the screen everytime
  _update() {
    this._clean();
    this._drawEnemy();
    this._drawPlayer();
    this._drawChakraBallE();
    this._drawChakraBall();
    this._drawAnimationE();
    this._drawAnimation();
    this._checkPlayerAdvancedFront();
    this._checkEnemyAdvancedFront();
    this._checkCollisions();
    this._drawMarkers("player");
    this._drawMarkers("enemy");
    this._drawExplosionAnimation();
    this._drawTimer();
    if (
      this.player.health > 0 &&
      this.enemy.health > 0 &&
      this.intervalTimeOverId
    ) {
      window.requestAnimationFrame(() => this._update());
    }
  }

  start() {
    this._assignControls();
    //When the game starts, the Enemy's IA is activated till the end of the game
    this.intervalEnemyIA = setInterval(() => {
      this._manageEnemyIA();
    }, 650);
    //After a moving, turn base char position image
    this.intervalImg = setInterval(() => {
      this.player.stateImg = 0;
      this.enemy.stateImg = 0;
    }, 1500);
    //Control the Timer
    this.intervalTimeOverId = setInterval(() => {
      this.currentTime -= 1;
    }, 1000);
    this._update();
  }
}
