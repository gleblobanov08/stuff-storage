const countries=["Argentina", "Australia", "Austria", "Belgium", "Bosnia and Herzegovina",
"Brazil", "Canada", "Cape Verde",  "Colombia", "Croatia", "Curacao", "Czechia", "DR Congo",
"Ecuador", "Egypt", "England", "France", "Germany", "Ghana", "Haiti", "Iran", "Iraq", "Ivory Coast",
"Japan", "Jordan", "Mexico", "Morocco", "Netherlands", "New Zealand", "Norway", "Panama", "Paraguay",
"Portugal", "Qatar", "Saudi Arabia", "Scotland", "Senegal", "South Africa", "South Korea",
"Spain", "Sweden", "Switzerland", "Tunisia", "Turkey", "United States", "Uruguay", "Uzbekistan", "Algeria"
];

const board = document.getElementById("board");
const progress = document.getElementById("progress");
const input = document.getElementById("guess");
const message = document.getElementById("message");

let found = [];

function drawTable() {
    let cols = 6;
    let rows = Math.ceil(countries.length/cols);

    let index = 0;

    for (let r = 0; r < rows;r++) {
        let tr = document.createElement("tr");
        for (let c=0; c < cols; c++) {
            let td = document.createElement("td");
            if (index < countries.length) {
                td.id = "cell"+index;
                td.innerHTML = "???";
                td.className = "hidden";
            } else {
                td.innerHTML = "";
            }
        tr.appendChild(td);
        index++;
        }
        board.appendChild(tr);
    }
}

drawTable();

function normalize(text) {
    return text.toLowerCase().replace(/\./g,"").replace(/-/g," ").replace(/\s+/g," ").trim();
}

input.addEventListener("input", () => {
    let guess = normalize(input.value);
    countries.forEach((country,index) => {
        if (guess === normalize(country) && !found.includes(country)) {
            found.push(country);
            const cell = document.getElementById("cell"+index);
            cell.innerHTML = country;
            cell.className = "revealed";
            progress.innerHTML = `${found.length} / ${countries.length} Countries Found`;
            input.value = "";
            if (found.length===countries.length) {
                message.innerHTML = "🏆 YOU WIN NOTHING! congrats nerd";
                clearInterval(timer);
            }
        }
    });
});

let time = 600;
const timerDiv = document.getElementById("timer");
const timer = setInterval(() => {
    time--;
    let m = Math.floor(time/60);
    let s = time%60;
    timerDiv.innerHTML = String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
    if (time<=0) {
        clearInterval(timer);
        input.disabled = true;
        message.innerHTML = "⏰ Time's Up!";
    }
},1000);

input.focus();