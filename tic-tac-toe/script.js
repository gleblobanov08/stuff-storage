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
let currentPlayer = "X";
let gameDead = false;
let spaces = ["", "", "", "", "", "", "", "", "", ""];

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', makeMove));
document.getElementById("reset-btn").addEventListener('click', restartGame);

function makeMove(el) {
    const clicked = el.target;
    const clickedIndex = parseInt(clicked.getAttribute("id"));
  
    if (spaces[clickedIndex] !== "" || gameDead) {
        return;
    }
  
    movePlayed(clicked, clickedIndex);
    checkEnd();
 }

function movePlayed(cell, cellIndex) {
    spaces[cellIndex] = currentPlayer;
    cell.innerText = currentPlayer;
}

function checkEnd() {
    let gameOver = false;
    for (let i = 0; i < 8; i++) {
        const condition = winningCombinations[i];
        let a = spaces[condition[0]];
        let b = spaces[condition[1]];
        let c = spaces[condition[2]];
    
        if (a === '' || b === '' || c === '') {
            continue;
        }
    
        if (a === b && b === c) {
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        results.innerText = currentPlayer + ' has won!';
        gameDead = true;
        return;
    }

    let staleMate = !spaces.includes("");
    if (staleMate) {
        results.innerText = "Is' a draw!";
        gameDead = true;
        return;
    }
  
    changePlayer();
}

function changePlayer () {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restartGame () {
    gameDead = false;
    spaces = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    results.innerText = "";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}