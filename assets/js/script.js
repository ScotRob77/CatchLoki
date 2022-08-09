/* Adds event listeners to all buttons */
const easyStart = document.getElementById('easy-game');
easyStart.addEventListener('click', startEasy);

const hardStart = document.getElementById('hard-game');
hardStart.addEventListener('click', startHard);

const vHardStart = document.getElementById('v-hard-game');
vHardStart.addEventListener('click', startVHard);

const gameReset = document.querySelector('#reset-game');
gameReset.addEventListener('click', resetGame);

let numTurnsSoFar = 0;
let score = 0;
let tileVisible = true;

/* Declare constants for DOM elements */
const gameBoard = document.getElementById('game-board');
const rulesHide = document.querySelector('.js-rules');
const easyHide = document.querySelector('.js-easy-start');
const hardHide = document.querySelector('.js-hard-start');
const vHardHide = document.querySelector('.js-vhard-start');
const scoreTotal = document.querySelector('.js-score');
const scoreTitle = document.querySelector('.js-scores');
const reset = document.querySelector('.js-reset');
const scoreShow = document.querySelector('#score');
const loserMessage = document.querySelector('.loser');

/* Hides game buttons and reveals score */
function setupGame() {
  rulesHide.classList.add('hidden');
  easyHide.classList.add('hidden');
  hardHide.classList.add('hidden');
  vHardHide.classList.add('hidden');
  scoreTotal.classList.remove('hidden');
  scoreTitle.classList.remove('hidden');
}

/* Initiates easy game */
function startEasy() {
  setupGame();
  easyGame();
}

/* Initiates hard game */
function startHard() {
  setupGame();
  hardGame();
}

/* Initiates very hard game */
function startVHard() {
  setupGame();
  vHardGame();
}

/* Game functions: Tiles turn off prior to reappearing on screen ready for user interaction. 
New configuration is called which creates the random order of tiles.
If the number of turns is reached stopGame function is initiated with relevant message. */

/* Credit to the book Get Coding on Walker Books for some of the following game code */
/* Easy game */
function easyGame() {
  tileVisible = !tileVisible;
  newConfiguration();
  numTurnsSoFar++;
  if (numTurnsSoFar >= 40) {
    stopGame();
  } else {
    setTimeout(easyGame, tileVisible ? 2000 : 2000);
    numTurnsSoFar += 1;
    scoreShow.textContent = score;
  }
}

/* Hard game */
function hardGame() {
  tileVisible = !tileVisible;
  newConfiguration();
  numTurnsSoFar++;
  if (numTurnsSoFar >= 40) {
    stopGame();
  } else {
    setTimeout(hardGame, tileVisible ? 1200 : 1500);
    numTurnsSoFar += 1;
    scoreShow.textContent = score;
  }
}

/* Very hard game */
function vHardGame() {
  tileVisible = !tileVisible;
  newConfiguration();
  numTurnsSoFar++;
  if (numTurnsSoFar >= 40) {
    stopGame();
  } else {
    setTimeout(vHardGame, tileVisible ? 800 : 1500);
    numTurnsSoFar += 1;
    scoreShow.textContent = score;
  }
}

/* Creates the characters to flash on and off
Sets configuration of characters */
function newConfiguration() {
  let classToSet = tileVisible ? "tile visible" : "tile hidden";

  for (let i = 0; i < 6; i++) {
    let currentTile = gameBoard.children[i];
    currentTile.className = classToSet;
    currentTile.innerHTML = '';
    currentTile.onclick = function (score) {
      score += 0;
    };
  }

  let randomHero = Math.floor(Math.random() * 6) + 1;
  gameBoard.children[randomHero - 1].innerHTML = "";
  gameBoard.children[randomHero - 1].onclick = function () {
    score += 1;
  };
  gameBoard.children[randomHero - 1].className = classToSet + " loki";
}

/* Shows user message at end of game and calls reset button */
function stopGame() {
  if (score >= 10) {
    scoreTitle.classList.add('hidden');
    loserMessage.classList.remove('hidden');
    loserMessage.textContent = (`Congratulations... You scored ${score} and captured Loki`);
    scoreTotal.textContent = ('Why not test your skill at a harder level');
    reset.classList.remove('hidden');
  } else {
    scoreTitle.classList.add('hidden');
    loserMessage.classList.remove('hidden');
    loserMessage.textContent = (`Oh No..... You only scored ${score}`);
    scoreTotal.textContent = (`Loki got away. Try again to see if you can catch him `);
    reset.classList.remove('hidden');
  }
}

/* Resets page to show game buttons */
function resetGame() {
  window.location.reload();
}