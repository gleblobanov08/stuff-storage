const cells = document.getElementsByClassName("cell");
let currentPlayer = 'X';
let gameOver = false;

function resetGame() {
    // field reset
}

document.getElementById("reset-btn").addEventListener('click', resetGame());