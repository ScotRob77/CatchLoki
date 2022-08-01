let easyStart = document.getElementById('easy-game')
easyStart.addEventListener('click', startEasy)
//let characters = document.getElementsByClassName('character')
//characters[5].innerHTML = "img src='images/thor.png"
var numTurnsSoFar = 0
var score = 0
var tileVisible = true
var gameBoard = document.getElementById('game-board')
const rulesHide = document.querySelector('.js-rules');
const easyHide = document.querySelector('.js-easy-start');
const hardHide = document.querySelector('.js-hard-start');
const scoreTotal = document.querySelector('.js-scores');
const info = document.querySelector('.js-info');


function startEasy() {
  rulesHide.classList.add('hidden');
  easyHide.classList.add('hidden');
  hardHide.classList.add('hidden');
  scoreTotal.classList.remove('hidden');
  info.classList.remove('hidden');
  easyGame();
}


// Easy game
function easyGame() {
  tileVisible = !tileVisible;
  newConfiguration();
  numTurnsSoFar++;
  if (numTurnsSoFar >= 10) {
    stopGame()
  } else {
    setTimeout(easyGame, tileVisible ? 2500 : 2000);

  }
}


// Creates the characters to flash on and off
// Sets configuration of characters
function newConfiguration() {
  var classToSet = tileVisible ? "tile visible" : "tile hidden";
  for (var i = 0; i < 6; i++) {
    gameBoard.children[i].className = classToSet
    gameBoard.children[i].innerHTML = '';
    gameBoard.children[i].onclick = function () {
      score = + -2;
    }
  }

  var randomHero = Math.floor(Math.random() * 6) + 1;
  gameBoard.children[randomHero - 1].innerHTML = ""
  gameBoard.children[randomHero - 1].onclick.incrementScore;
  gameBoard.children[randomHero - 1].className = classToSet + " loki"
}


// Updates score

function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = +1;

}

// Shows final score and reloads window
function stopGame() {
  alert('You scored ' + score)
  window.location.reload()
}


/*
1. Game flow:

a. When the user presses the start button

   show new configuration

b. When the user clicks on a character [tile] (when the game is active),

   Update score (see 2)
   show new configuration

c. When we've reached the maximum number of turns, just stop the game

2. Scoring
a. If clicked on Loki, +1
b. If clicked on Good guy, 0

3. Stopping the game
   Disable the tiles so they're not clickable
*/