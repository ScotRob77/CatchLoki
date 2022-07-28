let easyStart = document.getElementById('easy-game')
easyStart.addEventListener('click', startEasy)
// let characters = document.getElementsByClassName('character')
var numTurnsSoFar = 0
var score = 0
var characterVisible = true
var gameBoard = document.getElementById('game-board')
//let characterClass = ""


function startEasy() {
  easyGame();
}


// Easy game
function easyGame() {
  characterVisible = !characterVisible;
  newConfiguration();
  flashCharacters();
  numTurnsSoFar++;
  if (numTurnsSoFar < 21) {
    setTimeout(easyGame, characterVisible ? 2500 : 2000);
  } else {
    alert('You scored ' + score);
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
    gameBoard.children[i].innerHTML = "thor";
    gameBoard.children[i].onclick = function () {
      score++
    }
  }
  let randomCharacter = Math.floor(Math.random() * 6) + 1;
  gameBoard.children[randomCharacter - 1].innerHTML = "loki"
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