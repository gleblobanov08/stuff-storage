const possibleOutcomes = ["1", "2", "3", "4", "5"];
const rings = document.querySelectorAll(".ring");
rings.forEach(ring => ring.innerText = "?");

const btn = document.getElementById("spin");
btn.addEventListener('click', spin);
let btnIsClickable = true;

function spin() {
  if (btnIsClickable) {
    rings.forEach(ring => ring.innerText = "?");
    btnIsClickable = false;
    btn.classList.add('not-spinable');
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        rings[i].innerText = possibleOutcomes[Math.floor(Math.random() * 5)];
        
        if (i === 2) {
          setTimeout(checkWin, 800);
        }
      }, i * 800);
    }
  }
}

function checkWin() {
  const a = document.getElementById("ring1");
  const b = document.getElementById("ring2");
  const c = document.getElementById("ring3");
  
  if (a.innerText === b.innerText && b.innerText === c.innerText && a.innerText !== "?") {
    document.getElementById("info").innerText = "You Win!";
  } else {
    btn.classList.remove('not-spinable');
    btnIsClickable = true;
  }
}