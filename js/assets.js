//Create height limit where the player cannot move due the markers space
const screenHeightLimit = 35;

//The array contain all the avariable chars and their imagenes
const characters = [
  { name: "GogetaBlue", scale: 0.20, imageSecuence: [] },
  { name: "Cell", scale: 0.19, imageSecuence: [] },
  { name: "Jiren", scale: 0.18, imageSecuence: [] },
];

//Load all the images for every char
for (let i = 0; i < characters.length; i++) {
  characters[i].imageSecuence[0] = new Image();
  characters[i].imageSecuence[0].src = `./img/${characters[i].name}/base.png`;

  characters[i].imageSecuence[1] = new Image();
  characters[i].imageSecuence[1].src = `./img/${characters[i].name}/chakraball.png`;

  characters[i].imageSecuence[2] = new Image();
  characters[i].imageSecuence[2].src = `./img/${characters[i].name}/dead.png`;

  characters[i].imageSecuence[3] = new Image();
  characters[i].imageSecuence[3].src = `./img/${characters[i].name}/defense.png`;

  characters[i].imageSecuence[4] = new Image();
  characters[i].imageSecuence[4].src = `./img/${characters[i].name}/down.png`;

  characters[i].imageSecuence[5] = new Image();
  characters[i].imageSecuence[5].src = `./img/${characters[i].name}/energy-1.png`;

  characters[i].imageSecuence[6] = new Image();
  characters[i].imageSecuence[6].src = `./img/${characters[i].name}/energy-2.png`;

  characters[i].imageSecuence[7] = new Image();
  characters[i].imageSecuence[7].src = `./img/${characters[i].name}/energy-3.png`;

  characters[i].imageSecuence[8] = new Image();
  characters[i].imageSecuence[8].src = `./img/${characters[i].name}/energy-4.png`;

  characters[i].imageSecuence[9] = new Image();
  characters[i].imageSecuence[9].src = `./img/${characters[i].name}/energy-5.png`;

  characters[i].imageSecuence[10] = new Image();
  characters[i].imageSecuence[10].src = `./img/${characters[i].name}/energy-6.png`;

  characters[i].imageSecuence[11] = new Image();
  characters[i].imageSecuence[11].src = `./img/${characters[i].name}/hurt.png`;

  characters[i].imageSecuence[12] = new Image();
  characters[i].imageSecuence[12].src = `./img/${characters[i].name}/intro-1.png`;

  characters[i].imageSecuence[13] = new Image();
  characters[i].imageSecuence[13].src = `./img/${characters[i].name}/intro-2.png`;

  characters[i].imageSecuence[14] = new Image();
  characters[i].imageSecuence[14].src = `./img/${characters[i].name}/intro-3.png`;

  characters[i].imageSecuence[15] = new Image();
  characters[i].imageSecuence[15].src = `./img/${characters[i].name}/intro-4.png`;

  characters[i].imageSecuence[16] = new Image();
  characters[i].imageSecuence[16].src = `./img/${characters[i].name}/intro-5.png`;

  characters[i].imageSecuence[17] = new Image();
  characters[i].imageSecuence[17].src = `./img/${characters[i].name}/intro-6.png`;

  characters[i].imageSecuence[18] = new Image();
  characters[i].imageSecuence[18].src = `./img/${characters[i].name}/kick-1.png`;

  characters[i].imageSecuence[19] = new Image();
  characters[i].imageSecuence[19].src = `./img/${characters[i].name}/kick-2.png`;

  characters[i].imageSecuence[20] = new Image();
  characters[i].imageSecuence[20].src = `./img/${characters[i].name}/kick-3.png`;

  characters[i].imageSecuence[21] = new Image();
  characters[i].imageSecuence[21].src = `./img/${characters[i].name}/kick-4.png`;

  characters[i].imageSecuence[22] = new Image();
  characters[i].imageSecuence[22].src = `./img/${characters[i].name}/kick-5.png`;

  characters[i].imageSecuence[23] = new Image();
  characters[i].imageSecuence[23].src = `./img/${characters[i].name}/kick-6.png`;

  characters[i].imageSecuence[24] = new Image();
  characters[i].imageSecuence[24].src = `./img/${characters[i].name}/left.png`;

  characters[i].imageSecuence[25] = new Image();
  characters[i].imageSecuence[25].src = `./img/${characters[i].name}/punch-1.png`;

  characters[i].imageSecuence[26] = new Image();
  characters[i].imageSecuence[26].src = `./img/${characters[i].name}/punch-2.png`;

  characters[i].imageSecuence[27] = new Image();
  characters[i].imageSecuence[27].src = `./img/${characters[i].name}/punch-3.png`;

  characters[i].imageSecuence[28] = new Image();
  characters[i].imageSecuence[28].src = `./img/${characters[i].name}/punch-4.png`;

  characters[i].imageSecuence[29] = new Image();
  characters[i].imageSecuence[29].src = `./img/${characters[i].name}/punch-5.png`;

  characters[i].imageSecuence[30] = new Image();
  characters[i].imageSecuence[30].src = `./img/${characters[i].name}/punch-6.png`;

  characters[i].imageSecuence[31] = new Image();
  characters[i].imageSecuence[31].src = `./img/${characters[i].name}/right.png`;

  characters[i].imageSecuence[32] = new Image();
  characters[i].imageSecuence[32].src = `./img/${characters[i].name}/special-1.png`;

  characters[i].imageSecuence[33] = new Image();
  characters[i].imageSecuence[33].src = `./img/${characters[i].name}/special-2.png`;

  characters[i].imageSecuence[34] = new Image();
  characters[i].imageSecuence[34].src = `./img/${characters[i].name}/special-3.png`;

  characters[i].imageSecuence[35] = new Image();
  characters[i].imageSecuence[35].src = `./img/${characters[i].name}/special-4.png`;

  characters[i].imageSecuence[36] = new Image();
  characters[i].imageSecuence[36].src = `./img/${characters[i].name}/special-5.png`;

  characters[i].imageSecuence[37] = new Image();
  characters[i].imageSecuence[37].src = `./img/${characters[i].name}/special-6.png`;

  characters[i].imageSecuence[38] = new Image();
  characters[i].imageSecuence[38].src = `./img/${characters[i].name}/up.png`;

  characters[i].imageSecuence[39] = new Image();
  characters[i].imageSecuence[39].src = `./img/${characters[i].name}/_select.png`;
}

//Load all the images to manage the markers
let playerMarkerImg = [];
let enemyMarkerImg = [];

playerMarkerImg[0] = new Image();
playerMarkerImg[0].src = `./img/LifeBar/playerbar0.png`;
enemyMarkerImg[0] = new Image();
enemyMarkerImg[0].src = `./img/LifeBar/enemybar0.png`;

playerMarkerImg[1] = new Image();
playerMarkerImg[1].src = `./img/LifeBar/playerbar10.png`;
enemyMarkerImg[1] = new Image();
enemyMarkerImg[1].src = `./img/LifeBar/enemybar10.png`;

playerMarkerImg[2] = new Image();
playerMarkerImg[2].src = `./img/LifeBar/playerbar20.png`;
enemyMarkerImg[2] = new Image();
enemyMarkerImg[2].src = `./img/LifeBar/enemybar20.png`;

playerMarkerImg[3] = new Image();
playerMarkerImg[3].src = `./img/LifeBar/playerbar30.png`;
enemyMarkerImg[3] = new Image();
enemyMarkerImg[3].src = `./img/LifeBar/enemybar30.png`;

playerMarkerImg[4] = new Image();
playerMarkerImg[4].src = `./img/LifeBar/playerbar40.png`;
enemyMarkerImg[4] = new Image();
enemyMarkerImg[4].src = `./img/LifeBar/enemybar40.png`;

playerMarkerImg[5] = new Image();
playerMarkerImg[5].src = `./img/LifeBar/playerbar50.png`;
enemyMarkerImg[5] = new Image();
enemyMarkerImg[5].src = `./img/LifeBar/enemybar50.png`;

playerMarkerImg[6] = new Image();
playerMarkerImg[6].src = `./img/LifeBar/playerbar60.png`;
enemyMarkerImg[6] = new Image();
enemyMarkerImg[6].src = `./img/LifeBar/enemybar60.png`;

playerMarkerImg[7] = new Image();
playerMarkerImg[7].src = `./img/LifeBar/playerbar70.png`;
enemyMarkerImg[7] = new Image();
enemyMarkerImg[7].src = `./img/LifeBar/enemybar70.png`;

playerMarkerImg[8] = new Image();
playerMarkerImg[8].src = `./img/LifeBar/playerbar80.png`;
enemyMarkerImg[8] = new Image();
enemyMarkerImg[8].src = `./img/LifeBar/enemybar80.png`;

playerMarkerImg[9] = new Image();
playerMarkerImg[9].src = `./img/LifeBar/playerbar90.png`;
enemyMarkerImg[9] = new Image();
enemyMarkerImg[9].src = `./img/LifeBar/enemybar90.png`;

playerMarkerImg[10] = new Image();
playerMarkerImg[10].src = `./img/LifeBar/playerbar100.png`;
enemyMarkerImg[10] = new Image();
enemyMarkerImg[10].src = `./img/LifeBar/enemybar100.png`;

//Load images to manage Game Over

const win = new Image();
win.src = './img/GameOver/win.png';

const lose = new Image();
lose.src = './img/GameOver/lose.png';

const explosionSequence = [];

explosionSequence[0] = new Image();
explosionSequence[0].src = `./img/Others/explosion1.png`;

explosionSequence[1] = new Image();
explosionSequence[1].src = `./img/Others/explosion2.png`;

explosionSequence[2] = new Image();
explosionSequence[2].src = `./img/Others/explosion3.png`;

explosionSequence[3] = new Image();
explosionSequence[3].src = `./img/Others/explosion4.png`;

explosionSequence[4] = new Image();
explosionSequence[4].src = `./img/Others/explosion5.png`;

explosionSequence[5] = new Image();
explosionSequence[5].src = `./img/Others/explosion6.png`;
