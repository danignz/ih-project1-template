class ChakraBall{
    constructor() {
    //   this.x = Math.floor(Math.random() * (950 - 4) + 5);
    //   this.y = Math.floor(Math.random() * (-100 +60 + 1) -60);
    //   this.width = width;
    //   this.height = height;
    //   this.role = undefined;
    //   this.fallInterval = undefined;
      this.image = undefined;
    }
  /*
    _fallDown() {
      // console.log(`Droplet position: x = ${this.x} y = ${this.y}`);
      this.fallInterval = setInterval(() => {
        if (this.y > 650) {
        clearInterval(this.fallInterval);
        } else {
          this.y = this.y + 1;
        }
      }, 1000);
    }
    */
    _assignImage() {
        this.imagePath = `./img/` + `${this.charName}/` + `chakraball.png`;
        console.log(this.imagePath);
    }
  }