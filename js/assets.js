//Create Limit where the player cannpt move due the markers space
const screenHeightLimit = 50;

const characters = [
    { name: "GogeteBlue", scale: 0.12 },
    { name: "Cell", scale: 0.14 }
  ];

const baseImgGB = new Image();
baseImgGB.src = './img/GogetaBlue/base.png';

const chakraballImgGB = new Image();
chakraballImgGB.src = './img/GogetaBlue/chakraball.png';

const deadImgGB = new Image();
deadImgGB.src = './img/GogetaBlue/dead.png';

const defenseImgGB = new Image();
defenseImgGB.src = './img/GogetaBlue/defense.png';

const downImgGB = new Image();
downImgGB.src = './img/GogetaBlue/down.png';

const energy1ImgGB = new Image();
energy1ImgGB.src = './img/GogetaBlue/energy-1.png';

const energy2ImgGB = new Image();
energy2ImgGB.src = './img/GogetaBlue/energy-2.png';

const energy3ImgGB = new Image();
energy3ImgGB.src = './img/GogetaBlue/energy-3.png';

const energy4ImgGB = new Image();
energy4ImgGB.src = './img/GogetaBlue/energy-4.png';

const energy5ImgGB = new Image();
energy5ImgGB.src = './img/GogetaBlue/energy-5.png';

const energy6ImgGB = new Image();
energy6ImgGB.src = './img/GogetaBlue/energy-6.png';

const hurtImgGB = new Image();
hurtImgGB.src = './img/GogetaBlue/hurt.png';

const intro1ImgGB = new Image();
intro1ImgGB.src = './img/GogetaBlue/intro-1.png';

const intro2ImgGB = new Image();
intro2ImgGB.src = './img/GogetaBlue/intro-2.png';

const intro3ImgGB = new Image();
intro3ImgGB.src = './img/GogetaBlue/intro-3.png';

const intro4ImgGB = new Image();
intro4ImgGB.src = './img/GogetaBlue/intro-4.png';

const intro5ImgGB = new Image();
intro5ImgGB.src = './img/GogetaBlue/intro-5.png';

const intro6ImgGB = new Image();
intro6ImgGB.src = './img/GogetaBlue/intro-6.png';

const kick1ImgGB = new Image();
kick1ImgGB.src = './img/GogetaBlue/kick-1.png';

const kick2ImgGB = new Image();
kick2ImgGB.src = './img/GogetaBlue/kick-2.png';

const kick3ImgGB = new Image();
kick3ImgGB.src = './img/GogetaBlue/kick-3.png';

const kick4ImgGB = new Image();
kick4ImgGB.src = './img/GogetaBlue/kick-4.png';

const kick5ImgGB = new Image();
kick5ImgGB.src = './img/GogetaBlue/kick-5.png';

const kick6ImgGB = new Image();
kick6ImgGB.src = './img/GogetaBlue/kick-6.png';

const leftImgGB = new Image();
leftImgGB.src = './img/GogetaBlue/left.png';

const punch1ImgGB = new Image();
punch1ImgGB.src = './img/GogetaBlue/punch-1.png';

const punch2ImgGB = new Image();
punch2ImgGB.src = './img/GogetaBlue/punch-2.png';

const punch3ImgGB = new Image();
punch3ImgGB.src = './img/GogetaBlue/punch-3.png';

const punch4ImgGB = new Image();
punch4ImgGB.src = './img/GogetaBlue/punch-4.png';

const punch5ImgGB = new Image();
punch5ImgGB.src = './img/GogetaBlue/punch-5.png';

const punch6ImgGB = new Image();
punch6ImgGB.src = './img/GogetaBlue/punch-6.png';

const rightImgGB = new Image();
rightImgGB.src = './img/GogetaBlue/right.png';

const special1ImgGB = new Image();
special1ImgGB.src = './img/GogetaBlue/special-1.png';

const special2ImgGB = new Image();
special2ImgGB.src = './img/GogetaBlue/special-2.png';

const special3ImgGB = new Image();
special3ImgGB.src = './img/GogetaBlue/special-3.png';

const special4ImgGB = new Image();
special4ImgGB.src = './img/GogetaBlue/special-4.png';

const special5ImgGB = new Image();
special5ImgGB.src = './img/GogetaBlue/special-5.png';

const special6ImgGB = new Image();
special6ImgGB.src = './img/GogetaBlue/special-6.png';

const upImgGB = new Image();
upImgGB.src = './img/GogetaBlue/up.png';



const baseImgCE = new Image();
baseImgCE.src = './img/Cell/base.png';

const chakraballImgCE = new Image();
chakraballImgCE.src = './img/Cell/chakraball.png';

const deadImgCE = new Image();
deadImgCE.src = './img/Cell/dead.png';

const defenseImgCE = new Image();
defenseImgCE.src = './img/Cell/defense.png';

const downImgCE = new Image();
downImgCE.src = './img/Cell/down.png';

const energy1ImgCE = new Image();
energy1ImgCE.src = './img/Cell/energy-1.png';

const energy2ImgCE = new Image();
energy2ImgCE.src = './img/Cell/energy-2.png';

const energy3ImgCE = new Image();
energy3ImgCE.src = './img/Cell/energy-3.png';

const energy4ImgCE = new Image();
energy4ImgCE.src = './img/Cell/energy-4.png';

const energy5ImgCE = new Image();
energy5ImgCE.src = './img/Cell/energy-5.png';

const energy6ImgCE = new Image();
energy6ImgCE.src = './img/Cell/energy-6.png';

const hurtImgCE = new Image();
hurtImgCE.src = './img/Cell/hurt.png';

const intro1ImgCE = new Image();
intro1ImgCE.src = './img/Cell/intro-1.png';

const intro2ImgCE = new Image();
intro2ImgCE.src = './img/Cell/intro-2.png';

const intro3ImgCE = new Image();
intro3ImgCE.src = './img/Cell/intro-3.png';

const intro4ImgCE = new Image();
intro4ImgCE.src = './img/Cell/intro-4.png';

const intro5ImgCE = new Image();
intro5ImgCE.src = './img/Cell/intro-5.png';

const intro6ImgCE = new Image();
intro6ImgCE.src = './img/Cell/intro-6.png';

const kick1ImgCE = new Image();
kick1ImgCE.src = './img/Cell/kick-1.png';

const kick2ImgCE = new Image();
kick2ImgCE.src = './img/Cell/kick-2.png';

const kick3ImgCE = new Image();
kick3ImgCE.src = './img/Cell/kick-3.png';

const kick4ImgCE = new Image();
kick4ImgCE.src = './img/Cell/kick-4.png';

const kick5ImgCE = new Image();
kick5ImgCE.src = './img/Cell/kick-5.png';

const kick6ImgCE = new Image();
kick6ImgCE.src = './img/Cell/kick-6.png';

const leftImgCE = new Image();
leftImgCE.src = './img/Cell/left.png';

const punch1ImgCE = new Image();
punch1ImgCE.src = './img/Cell/punch-1.png';

const punch2ImgCE = new Image();
punch2ImgCE.src = './img/Cell/punch-2.png';

const punch3ImgCE = new Image();
punch3ImgCE.src = './img/Cell/punch-3.png';

const punch4ImgCE = new Image();
punch4ImgCE.src = './img/Cell/punch-4.png';

const punch5ImgCE = new Image();
punch5ImgCE.src = './img/Cell/punch-5.png';

const punch6ImgCE = new Image();
punch6ImgCE.src = './img/Cell/punch-6.png';

const rightImgCE = new Image();
rightImgCE.src = './img/Cell/right.png';

const special1ImgCE = new Image();
special1ImgCE.src = './img/Cell/special-1.png';

const special2ImgCE = new Image();
special2ImgCE.src = './img/Cell/special-2.png';

const special3ImgCE = new Image();
special3ImgCE.src = './img/Cell/special-3.png';

const special4ImgCE = new Image();
special4ImgCE.src = './img/Cell/special-4.png';

const special5ImgCE = new Image();
special5ImgCE.src = './img/Cell/special-5.png';

const special6ImgCE = new Image();
special6ImgCE.src = './img/Cell/special-6.png';

const upImgCE = new Image();
upImgCE.src = './img/Cell/up.png';






