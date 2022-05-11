class Game {
  constructor(context) {
    this.ctx = context;
    this.player = new Player(300, 230, characters[0],playerMarkerImg);
    this.enemy = new Enemy(-700, 230, characters[1],enemyMarkerImg);
    this.intervalEnemyIA = undefined;
    this.intervalGameOver = undefined;
  }

  //Method to draw the static player at the screen
  _drawPlayer() {
    //When an animation its running, dont have to draw the static player. Not animation executing means an undefined value by default
    if (!this.player.charAnimaton.actionInterval) {
      let frameToSgow = 0;
      //if player dies show other image
      if(this.player.health<=0){
        frameToSgow = 2;
      }
      this.ctx.drawImage(
        this.player.charImages[frameToSgow],
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
      let frameToSgow = 0;
      //if enemy dies show other image
      if(this.enemy.health<=0){
        frameToSgow = 2;
      }
      //Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis.
      //Need to inverter the position of the enemy for the fighters see in front each other, due only there are png's images in one direction.
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(
        this.enemy.charImages[frameToSgow],
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
            !this.player.chakraBall.moveIntervalWait
          ) {
            //Plays the player's action animation linked to Chakraball throwing
            this.player.charAnimaton._executeAnimation("special");
            //Invoke to _setStart method. It needs to know the coordinates of the char's current position and add to the X-asis its width to be draw in the right place
            this.player.chakraBall._setStart(
              this.player.x + this.player.width,
              this.player.y,
              "player"
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
  }

  //Method that controls the machine's IA
  _manageEnemyIA() {
    //let randomAction = Math.floor(Math.random() * 10); // expected output: between 0-9;
    let randomAction = 8;

    switch (randomAction) {
      case 0:
        this.enemy.moveLeft();
        this.enemy.moveLeft();
        this.enemy.moveLeft();
        this.enemy.moveLeft();
        this.enemy.moveLeft();
        break;
      case 1:
        this.enemy.moveRight();
        this.enemy.moveRight();
        this.enemy.moveRight();
        this.enemy.moveRight();
        this.enemy.moveRight();
        break;
      case 2:
        this.enemy.moveUp();
        this.enemy.moveUp();
        this.enemy.moveUp();
        this.enemy.moveUp();
        this.enemy.moveUp();
        break;
      case 3:
        this.enemy.moveDown();
        this.enemy.moveDown();
        this.enemy.moveDown();
        this.enemy.moveDown();
        this.enemy.moveDown();
        break;
      case 4:
        this.enemy.charAnimaton._executeAnimation("punch");
        break;
      case 5:
        this.enemy.charAnimaton._executeAnimation("kick");
        break;
      case 6:
        this.enemy.charAnimaton._executeAnimation("energy");
        break;
      case 7:
        this.enemy.charAnimaton._executeAnimation("intro");
        break;
      case 8:
      case 9:
        //Only creates a new ChakraBall if both setInterval are undefined (that means that there are not another running in this moment)
        //The moveIntervalWait manages the duration of char's animation before throwing the ball. Undefined means that there are not another running in this moment.
        if (
          !this.enemy.chakraBall.moveInterval &&
          !this.enemy.chakraBall.moveIntervalWait
        ) {
          this.enemy.charAnimaton._executeAnimation("special");
          //Invoke to _setStart method, it needs to know the coordinates of the enemy's current position and add to the X-asis its width to be draw in the right place
          this.enemy.chakraBall._setStart(
            Math.abs(this.enemy.x) - this.enemy.width,
            this.enemy.y,
            "enemy"
          );
        }
        break;
    }
  }

  _checkCollisions() {
    
    //Two chakraballs collides with each other. If only for visual purpose.
    //The first condition checks if the enemy's chakraball completely through the player's ball. Check x asis
    if (
        (this.enemy.chakraBall.x - this.enemy.charImages[1].width * this.enemy.scale - this.player.chakraBall.x < 1) 
        &&
        //These condition checks if the enemy's chakraball upper corner its inside the player's ball. Check y asis    
        (
          ((this.enemy.chakraBall.y <= this.player.chakraBall.y) &&
          (this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale >= this.player.chakraBall.y))
          //These condition checks if the enemy's chakraball botton corner its inside the player's ball. Check y asis    
          ||
          ((this.enemy.chakraBall.y <= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale) &&
          (this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale >= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
          ||        
          //These condition checks if the player's chakraball its smaller than enemy's ball and it across inside it. Check y asis
          ((this.enemy.chakraBall.y <= this.player.chakraBall.y) &&
          (this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale >= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
          //These condition checks if the enemy's chakraball its smaller than player's ball and it across inside it. Check y asis
          || 
          ((this.enemy.chakraBall.y >= this.player.chakraBall.y) &&
          (this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale <= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
        )
    ) {
      //if it collides the animation will stop
      this.player.chakraBall._stopMove();
      this.enemy.chakraBall._stopMove();
    }


    //Enemy collides with a chakraball
    if (
       //check if player's chakraball across inside the enemy in x asis
       ((Math.abs(this.enemy.x) - this.enemy.width - this.player.chakraBall.x < 1) && (this.player.chakraBall.x < canvas.width))
       &&
       //check if player's chakraball across inside the enemy in y asis
       (
        ((this.enemy.y <= this.player.chakraBall.y) &&
        (this.enemy.y + this.enemy.height >= this.player.chakraBall.y))
        //These condition checks if the player's chakraball botton corner its inside the enemy. Check y asis 
        ||
        ((this.enemy.y <= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale) &&
        (this.enemy.y + this.enemy.height >= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
        //These condition checks if the player's chakraball upper corner its inside the enemy. Check y asis 
        ||        
        ((this.enemy.y <= this.player.chakraBall.y) &&
        (this.enemy.y + this.enemy.height >= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
        //These condition checks if the player's chakraball its inside the enemy's body. Check y asis 
        || 
        ((this.enemy.y >= this.player.chakraBall.y) &&
        (this.enemy.y + this.enemy.height <= this.player.chakraBall.y + this.player.charImages[1].height * this.player.scale))
        //These condition checks if the enemy's body its inside the chakraball. Its an hipotetic case, because chars by default are bigger than chakraball. Check y asis 
       )
      )
      {
        //This means that chakraball hurts enemy
        this.player.chakraBall._stopMove();
        this.enemy.receiveDamage(this.player.specialAttack());
        console.log(this.enemy.health);
      }


    //Player collides with a chakraball
    if (
       //check if enemy's chakraball across inside the player in x asis
       ((this.enemy.chakraBall.x - this.player.x - this.player.width < 1) && (this.enemy.chakraBall.x > 0))
       &&
       //check if enemy's chakraball across inside the player in y asis
       (
        ((this.player.y <= this.enemy.chakraBall.y) &&
        (this.player.y + this.player.height >= this.enemy.chakraBall.y))
        //These condition checks if the enemy's chakraball botton corner its inside the player. Check y asis 
        ||
        ((this.player.y <= this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale) &&
        (this.player.y + this.player.height >= this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale))
        //These condition checks if the enemy's chakraball upper corner its inside the player. Check y asis 
        ||        
        ((this.player.y <= this.enemy.chakraBall.y) &&
        (this.player.y + this.player.height >= this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale))
        //These condition checks if the enemy's chakraball its inside the player's body. Check y asis 
        || 
        ((this.player.y >= this.enemy.chakraBall.y) &&
        (this.player.y + this.player.height <= this.enemy.chakraBall.y + this.enemy.charImages[1].height * this.enemy.scale))
        //These condition checks if the player's body its inside the chakraball. Its an hipotetic case, because chars by default are bigger than chakraball. Check y asis 
       )
      )
      {
        //This means that chakraball hurts player
        this.enemy.chakraBall._stopMove();
        this.player.receiveDamage(this.enemy.specialAttack());
        console.log(this.player.health);
      }

      if (this.player.health <= 0 || this.enemy.health <= 0 ) {  
        this.intervalGameOver = setInterval(() => {
          clearInterval(this.intervalGameOver);
        //    this.gameOver();
        }, 10000);
      }

/*
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
      this.enemy.chakraBall.x -
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
    */
  }

  //Method to draw the markers
  _drawMarkers(char) {

      let imgMarker = 10;
      
      if (char === "player"){
      
        if(this.player.health >= 90){
          imgMarker = 10;
        } else if(this.player.health >= 80){
          imgMarker = 9;
        } else if(this.player.health >= 70){
          imgMarker = 8;
        } else if(this.player.health >= 60){
          imgMarker = 7;
        } else if(this.player.health >= 50){
          imgMarker = 6;
        } else if(this.player.health >= 40){
          imgMarker = 5;
        } else if(this.player.health >= 30){
          imgMarker = 4;
        } else if(this.player.health >= 20){
          imgMarker = 3;
        } else if(this.player.health >= 10){
          imgMarker = 2;
        } else if(this.player.health >= 1){
          imgMarker = 1;
        } else if(this.player.health <= 0){
          imgMarker = 0;
        } 

        this.ctx.drawImage(
          this.player.marker[imgMarker],
          0,
          0,
          350,
          35
        );

      }else{

        if(this.enemy.health >= 90){
          imgMarker = 10;
        } else if(this.enemy.health >= 80){
          imgMarker = 9;
        } else if(this.enemy.health >= 70){
          imgMarker = 8;
        } else if(this.enemy.health >= 60){
          imgMarker = 7;
        } else if(this.enemy.health >= 50){
          imgMarker = 6;
        } else if(this.enemy.health >= 40){
          imgMarker = 5;
        } else if(this.enemy.health >= 30){
          imgMarker = 4;
        } else if(this.enemy.health >= 20){
          imgMarker = 3;
        } else if(this.enemy.health >= 10){
          imgMarker = 2;
        } else if(this.enemy.health >= 1){
          imgMarker = 1;
        } else if(this.enemy.health <= 0){
          imgMarker = 0;
        } 
        this.ctx.drawImage(
          this.enemy.marker[imgMarker],
          650,
          0,
          350,
          35
        );
      }
  }

  //Manage the game when its over
  gameOver() {
    clearInterval(this.intervalEnemyIA);
    clearInterval(this.intervalGameOver);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none;"
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
    this._drawMarkers('player');
    this._drawMarkers('enemy');
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    //When the game starts, the Enemy's IA is activated till the end of the game
    this.intervalEnemyIA = setInterval(() => {
      this._manageEnemyIA();
    }, 4000);
    this._update();
  }
}
