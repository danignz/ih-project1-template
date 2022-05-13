class Player {
  constructor(x, y, charObject,marker) {
    this.x = x;
    this.y = y;
    //Due the images do not have the same size, it is necessary to scale depending on each character
    this.width = charObject.imageSecuence[0].width * charObject.scale;
    this.height = charObject.imageSecuence[0].height * charObject.scale;
    this.charName = charObject.name;
    this.scale = charObject.scale;
    this.charImages = charObject.imageSecuence;
    this.chakraBall = new ChakraBall();
    this.charAnimaton = new AnimationPlayer();
    this.ableToAdvance = true;
    this.marker = marker;
    this.canReceiveDamage = undefined;
    this.health = 99;
    this.strength = 5;
    this.stateImg = 0;
    this.imgInterval = undefined;
  }

  moveRight() {
    //As long as the character image is not cut by the right side we can move
    //The condition ableToAdvance checks if the fighters dont across each other in the X asis
    //When a chakraBall its running, char can not move
    if (
      this.x + 15 <= canvas.width - this.width &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait && 
      this.ableToAdvance === true
    ) {
      this.x = this.x + 15;
      this.stateImg = 31;
    }
  }

  moveLeft() {
    //As long as the character image is not cut by the left side we can move
    //When a chakraBall its running, char can not move
    if (
      this.x - 15 >= 0 &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait
    ) {
      this.x = this.x - 15;
      this.stateImg = 24;
    }
  }

  moveUp() {
    //As long as the character respect the height limit where the markers space is, its able to move
    //When a chakraBall its running, char can not move
    if (
      this.y - 15 >= screenHeightLimit &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait
    ) {
      this.y = this.y - 15;
      this.stateImg = 38;
    }
  }

  moveDown() {
    //As long as the character image is not cut by the down side we can move down
    //When a chakraBall its running, char can not move   
    if (
      this.y + 15 <= canvas.height - this.height &&
      !this.chakraBall.moveInterval &&
      !this.chakraBall.moveIntervalWait
    ) {
      this.y = this.y + 15;
      this.stateImg = 4;
    }
  }

  punchAttack(){
    return this.strength*2.1;
  }

  kickAttack(){
    return this.strength*2.3;
  }

  specialAttack(){
    return this.strength*3;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }

}
