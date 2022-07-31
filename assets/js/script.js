let easyStart = document.getElementById('easy-game')
easyStart.addEventListener('click', startEasy)
//let characters = document.getElementsByClassName('character')
//characters[5].innerHTML = "img src='images/thor.png"
var numTurnsSoFar = 0
var score = 0
var characterVisible = true
var gameBoard = document.getElementById('game-board')
const rulesHide = document.querySelector('.js-rules');
const easyHide = document.querySelector('.js-easy-start');
const hardHide = document.querySelector('.js-hard-start');



function startEasy() {
  easyGame();
}


// Easy game
function easyGame() {
  rulesHide.classList.add('hidden');
  easyHide.classList.add('hidden');
  hardHide.classList.add('hidden');
  characterVisible = !characterVisible;
  newConfiguration();
  flashCharacters();
  numTurnsSoFar++;
  if (numTurnsSoFar < 21) {
    setTimeout(easyGame, characterVisible ? 2500 : 2000);
  } else {
    window.location.reload()
  }

}

// Creates the characters to flash on and off
function flashCharacters() {
  var characterClass = characterVisible ? 'character visible' : 'character hidden';
  for (let i = 0; i < 6; i++) {
    gameBoard.children[i].className = characterClass
  }
}

// Sets configuration of characters
function newConfiguration() {
  for (let i = 0; i < 6; i++) {
    gameBoard.children[i].innerHTML = '';
    gameBoard.children[i].onclick = function () {
      incrementScore = + -2;
    }

  }
  let randomCharacter = Math.floor(Math.random() * 6) + 1;
  gameBoard.children[randomCharacter - 1].innerHTML = "loki"
  gameBoard.children[randomCharacter - 1].onclick = incrementScore;
}

// Updates score

function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

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