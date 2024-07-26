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
            <div>${champion.year}</div>
            <div>${champion.place}</div>
            <div>${champion.event}</div>
            <div class="player-name">${champion.player}</div>
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
            item.querySelector('.player-name').classList.add('revealed');
            input.value = '';
        }
    });
}

function checkAnswers() {
    const revealedItems = document.querySelectorAll('.player-name.revealed').length;
    const totalItems = document.querySelectorAll('.quiz-item').length;
    const result = document.getElementById('result');
    result.textContent = `You got ${revealedItems} out of ${totalItems} correct!`;
}

function giveUp() {
    checkAnswers();
    const items = document.querySelectorAll('.player-name');
    items.forEach(item => {
        item.classList.add('revealed');
    });
}
    
getData();