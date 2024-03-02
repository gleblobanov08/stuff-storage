const cells = Array.from(document.getElementsByClassName("cell"));
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
let spaces = Array(9).fill(null);

const startGame = () => {
    cells.forEach(el => el.addEventListener('click', makeMove))
};

function makeMove(el) {
    const spot = el.target.id;
    if (!spaces[spot]) {
        spaces[spot] = currentPlayer;
        el.target.innerText = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        if (checkEnd() !== false) {
            results.innerText = currentPlayer + " has won!";
        }
    }
}

function checkEnd () {
    for (const condition in winningCombinations) {
        let [a, b, c] = condition;

        if (spaces[a] && (spaces[a] === spaces[b] === spaces[c])) {
            return [a, b, c];
        }
    }
    return false;
}

function restart() {
    spaces.fill(null);
    cells.forEach(el => {
        el.innerText = "";
    });
    currentPlayer = "X";
    results.innerText = "";
};
document.getElementById("reset-btn").addEventListener("click", restart());

startGame();