let easyStart = document.getElementById('easy-game')
easyStart.addEventListener('click', startEasy)
// let tiles = document.getElementsByClassName('tile')
var numTurnsSoFar = 0
let score = 0
var characterVisible = false
var gameBoard = document.getElementById('game-board')
//let characterClass = ""


function startEasy() {
  easyGame();
}


// Easy game
function easyGame() {
  characterVisible = !characterVisible
  newConfiguration()
  flashCharacters()
  numTurnsSoFar++
  if (numTurnsSoFar < 10) {
    setTimeout(easyGame, 3000)
  } else {
    alert('Game Over');
  }
}

// Creates the characters to flash on and off
function flashCharacters() {
  var characterClass = characterVisible ? 'character visible' : 'character hidden';
  for (let i = 0; i < 6; i++) {
    gameBoard.children[i].className = characterClass
  }
}

function newConfiguration() {
  for (let i = 0; i < 6; i++) {
    gameBoard.children[i].innerHTML = "guest"
  }
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