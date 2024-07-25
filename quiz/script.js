let champions = [];

async function getData() {
    const response = await fetch('./List-of-players.csv');
    const data = await response.blob();
    const table = await data.text();
            
    const tournament = table.split('\n').slice(1);
    champions = tournament.map(row => {
        const columns = row.split(',');
        return {
            year: columns[0].replaceAll('"', ''),
            place: columns[1].replaceAll('"', ''),
            event: columns[2].replaceAll('"', ''),
            player: columns[3].replaceAll('"', '')
        };
    });
            
    loadQuiz();
}

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-items');
    champions.forEach((champion, index) => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item';
        quizItem.id = `champion-${index}`;
        quizItem.innerHTML = `
            <span>${champion.year} - ${champion.place} - ${champion.event} - </span>
            <span class="player-name">${champion.player}</span>
        `;
        quizContainer.appendChild(quizItem);
    });
}

function checkInput(input) {
    const playerName = input.value.trim().toLowerCase();
    const items = document.querySelectorAll('.quiz-item');
    items.forEach(item => {
        const player = item.querySelector('.player-name').textContent.trim().toLowerCase();
        if (player === playerName) {
            player.classList.add('revealed');
        }
    });
}

function checkAnswers() {
    const revealedItems = document.querySelectorAll('.player-name.revealed');
    const totalItems = document.querySelectorAll('.quiz-item').length;
    const score = revealedItems.length;
    const result = document.getElementById('result');
    result.textContent = `You got ${score} out of ${totalItems} correct!`;
}

function giveUp() {
    const items = document.querySelectorAll('.player-name');
    items.forEach(item => {
        item.classList.add('revealed');
    });
    checkAnswers();
}
    
getData();