const stats = document.getElementById("status");
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
let currentPlayer = "|";
let gameOver = false;
let spaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let prevIndex = 10;
              
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("click", handleMove));

document.getElementById("reset-btn").addEventListener("click", resetGame);

function handleMove(el) {
  const clicked = el.target;
  const clickedIndex = parseInt(clicked.getAttribute("id"));
  
  if (spaces[clickedIndex] > 2 || gameOver) {
    return;
  }
if (isMoveValid(spaces[clickedIndex]) && prevIndex !== clickedIndex) {
  movePlayed(clicked, clickedIndex);
  checkWin();
  prevIndex = clickedIndex;
}
}

function movePlayed(cell, cellIndex) {
  if (currentPlayer === "|") {
    spaces[cellIndex] += 1;
  } else {
    spaces[cellIndex] += 2;
  }
  
  switch (spaces[cellIndex]) {
    case 1:
      cell.innerText = "|";
      break;
    case 2: 
      cell.innerText = "-";
      break;
    case 3:
      cell.innerText = "+";
      break;
    default:
      cell.innerText = "";
  }
}

function isMoveValid(cell) {
  if (currentPlayer === "|") {
    return cell !== 1;
  } else if (currentPlayer === "-") {
    return cell !== 2;
  }
}

function checkWin() {
  for (let i = 0; i < 8; i++) {
    const condition = winningCombinations[i];
    let a = spaces[condition[0]];
    let b = spaces[condition[1]];
    let c = spaces[condition[2]];
    if (a === 3 && b === 3 && b === c) {
      gameOver = true;
      stats.innerText = `"${currentPlayer}" has won!`;
      document.getElementById("reset-btn").style.backgroundColor = "red";
      break;
    }
  }
  
  currentPlayer = currentPlayer === "|" ? "-" : "|";
}

function resetGame() {
  gameOver = false;
  currentPlayer = "|";
  spaces = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  stats.innerText = "";
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
  document.getElementById("reset-btn").style.backgroundColor = "darkgrey";
}