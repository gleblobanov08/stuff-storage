async function getData() {
    const response = await fetch('./List-of-players.csv');
    const data = await response.blob();
    const table = await data.text();
            
    const tournament = table.split('\n').slice(1);
    //tournament.forEach(el => console.log(el.split(',')));
    for (let i = 0; i < tournament.length; i++) {
        const element = tournament[i].split(',');
        /*const year = document.createElement('div');
        year.textContent = element[0];
        const place = document.createElement('div');
        place.textContent = element[1];
        const event = document.createElement('div');
        event.textContent = element[2];
        const champ = document.createElement('div');
        champ.textContent = element[3];*/
        //console.log(year, place, event, champ);
        for (let i = 0; i < element.length; i++) {
            const info = document.createElement('div');
            info.textContent = element[i].replaceAll('"', '');
            document.getElementById('answers').appendChild(info);
        }
    }
}

getData();