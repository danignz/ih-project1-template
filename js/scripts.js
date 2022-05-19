window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const startPage = document.getElementById("start-page");
  const startButton = document.getElementById("start");

  const selectPage = document.getElementById("select-page");
  const selectEnemyPage = document.getElementById("select-enemy");

  const finalPage = document.getElementById("final-page");
  const startAgainButton = document.getElementById("start-again");

  canvas.style = `background-image: url('./img/Others/bg${Math.floor(
    Math.random() * 7
  )}.jpg');`;

  startAgainButton.onclick = function () {
    finalPage.style = "display: none";
    location.reload();
  };

  startButton.onclick = function () {
    startPage.style = "display: none";
    selectPage.style = "display: flex";

    const sounds = [
      "./sounds/LoopSound0.wav",
      "./sounds/LoopSound1.wav",
      "./sounds/LoopSound2.wav",
      "./sounds/LoopSound3.wav",
    ];

    document.getElementById("myaudio").src =
      sounds[Math.floor(Math.random() * sounds.length)];
  };

  document.getElementById("XenoGoku").addEventListener("click", function () {
    player = 6;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("Vegeta").addEventListener("click", function () {
    player = 4;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("GogetaBlue").addEventListener("click", function () {
    player = 0;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("MutenRoshi").addEventListener("click", function () {
    player = 5;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("Gohan").addEventListener("click", function () {
    player = 3;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("Cell").addEventListener("click", function () {
    player = 1;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("SuperBuu").addEventListener("click", function () {
    player = 7;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("Jiren").addEventListener("click", function () {
    player = 2;
    selectPage.style = "display: none";
    selectEnemyPage.style = "display: flex";
  });

  document.getElementById("XenoGoku2").addEventListener("click", function () {
    enemy = 6;
    startGame();
  });

  document.getElementById("Vegeta2").addEventListener("click", function () {
    enemy = 4;
    startGame();
  });

  document.getElementById("GogetaBlue2").addEventListener("click", function () {
    enemy = 0;
    startGame();
  });

  document.getElementById("MutenRoshi2").addEventListener("click", function () {
    enemy = 5;
    startGame();
  });

  document.getElementById("Gohan2").addEventListener("click", function () {
    enemy = 3;
    startGame();
  });

  document.getElementById("Cell2").addEventListener("click", function () {
    enemy = 1;
    startGame();
  });

  document.getElementById("SuperBuu2").addEventListener("click", function () {
    enemy = 7;
    startGame();
  });

  document.getElementById("Jiren2").addEventListener("click", function () {
    enemy = 2;
    startGame();
  });

  function startGame() {
    selectEnemyPage.style = "display: none";
    canvas.classList.remove("hidden");
    const game = new Game(ctx);
    game.start();
  }
};
