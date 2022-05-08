//Create Limit where the player cannpt move due the markers space
const screenHeightLimit = 50;

const characters = [
  { name: "GogetaBlue", scale: 0.12, imageSecuence: [] },
  { name: "Cell", scale: 0.15, imageSecuence: [] },
];

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
