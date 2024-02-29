const cells = document.getElementsByClassName("cell");
const results = document.getElementById("results");
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let currentPlayer = 'X';
let gameOver = false;

startGame();

function startGame() {
    cells.forEach(el => {
        el.addEventListener('click', makeMove(el), {once = true})
    });
}

function makeMove(el) {
    const spot = el.target;
    placeSpot(spot, currentPlayer)
    if (!checkEnd) {
        changePlayer();
    }
}

function changePlayer () {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function placeSpot(square, player) {
    square.innerText = player;
}

function checkEnd () {
    if (winningCombinations.some(combination => {
        return combination.every(i => {
            return cells[i].innerText.contains(currentPlayer)
        })
    })) {
        results.innerText = currentPlayer + " won!";
        gameOver = true;
    } else if ([...cells].every(el => {
        el.innerText.contains("X") || el.innerText.contains("O");
    })) {
        results.innerText = "Draw!";
        gameOver = true;
    } else {
        continue;
    }
}

document.getElementById("reset-btn").addEventListener("click", startGame());