
let startEasy = document.getElementById('easy-game')
startEasy.addEventListener('click', easyGame)

// Variables
var loop = 0
var tileVisible = true;
var score = 0;


function easyGame() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    loop++;
    if (loop < 20) {
        setTimeout(easyGame, tileVisible ? 2000 : 3000);
    } else {
        alert("You scored " + score)
        window.location.reload()
    }
}

function hardGame() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    loop++;
    if (loop < 20) {
        setTimeout(hardGame, tileVisible ? 1000 : 2500);
    } else {
        alert("You scored " + score)
        window.location.reload()
    }
}

function createHeroesVillans() {
    var board = document.getElementById("game-board");
    var classToSet = tileVisible ? "tile visible" : "tile hidden";
    for (var i = 0; i < 6; i++) {
        board.children[i].className = classToSet;
        board.children[i].innerHTML = "";
        board.children[i].onclick = function () {
            score += -2;
        }
    }
    var randomHero = Math.floor(Math.random() * 6) + 1;
    board.children[randomHero - 1].innerHTML = "";
    board.children[randomHero - 1].onclick = function () {
        score += 10;
    }
    board.children[randomHero - 1].className = classToSet + " villain";
}