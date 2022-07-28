
let startEasy = document.getElementById('easy-game')
startEasy.addEventListener('click', startGame)

let numTurnsSoFar = 0
let score = 0


let tiles = document.getElementsByClassName('tile')
tiles[5].innerHTML = "<img src='images/good.jpg>'"

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


// HTML <button id="start-button"">Start Game</button>


// Functions called by event listeners always have the event information attached,
// including event.target -- which is the HTML element that triggered the event
function startGame(event) {
  // Reset score
  // Reset number of turns so far
  numTurnsSoFar = 0
  score = 0

  // Add it back in case this is a restart, and we've removed it in stopGame()
  for (let tile of tiles) {
    tile.addEventListener('click', showNewConfiguration)
  }

  showNewConfiguration()
}

function showNewConfiguration(event) {
  if (numTurnsSoFar >= 9) {
    stopGame()
  }
  else {
    // We're still below the max number of turns

    // <update the score depending on character clicked>

    // <code for showing new config here>
    // Generate 1 loki image and 5 thor image tags, put loki in a random tile and thor in the others
    // tag the tiles with a class or something that tells you who's on it for use in scoring

    // Increment numTurnsSoFar
    numTurnsSoFar += 1

  }
}

function stopGame() {
  for (let tile of tiles) {
    tile.removeEventListener('click', showNewConfiguration)
  }
}