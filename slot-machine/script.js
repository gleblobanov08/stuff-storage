const possibleOutcomes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const rings = document.querySelectorAll(".ring");
rings.forEach(ring => ring.innerText = "?");

const btn = document.getElementById("spin");
btn.addEventListener('click', spin);

function spin() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => { 
        rings[i].innerText = possibleOutcomes[Math.floor(Math.random() * 9)];
    }, i * 800);
  }
  checkWin();
}

function checkWin () {
  const a = document.getElementById("ring1");
  const b = document.getElementById("ring2"); const c = document.getElementById("ring3");
  if (a.innerText === b.innerText && b.innerText == c.innerText && a.innerText !== "?") {
    document.getElementById("info").innerText = "You Win!";
  } else {
    rings.forEach(ring => ring.innerText = "?");
  }
}
