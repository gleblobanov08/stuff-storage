async function getData() {
    const response = await fetch('./List-of-players.csv');
    const data = await response.blob();
    const table = await data.text();
            
    const tournament = table.split('\n').slice(1);
    for (let i = 0; i < tournament.length; i++) {
        const element = tournament[i].split(',');
        for (let i = 0; i < element.length; i++) {
            const info = document.createElement('div');
            info.textContent = element[i].replaceAll('"', '');
            document.getElementById('answers').appendChild(info);
        }
    }
}

getData();