const timer = document.getElementById("timer");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const milliseconds = document.getElementById("mill");

let interval;
let mins = 0;
let secs = 0;
let milsecs = 0;

const startTimer = () => {
  milsecs++;
  if (milsecs < 9) {
  milliseconds.innerText = '0' + milsecs;
  } else if (milsecs === 100) {
    milliseconds.innerText = '00';
  } else if (milsecs > 99) {
    secs++;
    seconds.innerText = '0' +  secs;
    milsecs = 0;
  } else {
    milliseconds.innerText = milsecs
  }
  
  if (secs > 9) {
    seconds.innerText = secs;
  } else if (secs > 59) {
    mins++;
    minutes.innerText = mins;
    secs = 0;
    seconds.innerText = '0' + secs;
  }
}

let touches = 0;

timer.addEventListener('click', () => {
  clearInterval(interval);
  if (touches % 2 == 0) {
    interval = setInterval(startTimer, 10);
} else {
    console.log(mins, secs, milsecs);
    mins = 0;
    secs = 0;
    milsecs = 0;
    minutes.innerText = '0';
    seconds.innerText = '00';
    milliseconds.innerText = '00';
  }
  touches++;
});