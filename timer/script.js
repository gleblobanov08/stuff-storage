document.addEventListener('DOMContentLoaded', () => {
  let startTime = null;
  let timerInterval = null;
  let running = false;
  let touches = 0;
  const timerDisplay = document.getElementById('timer');
  const timeList = document.getElementById('time-list');

  function startTimer() {
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 10);
      timerDisplay.textContent = '0.00';
  }

  function stopTimer() {
      clearInterval(timerInterval);
      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      appendTime(elapsedTime);
      timerDisplay.textContent = 'Start Timer';
  }

  function updateTimer() {
      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      timerDisplay.textContent = elapsedTime;
  }

  function appendTime(time) {
      touches++;
      const li = document.createElement('li');
      li.textContent = `${touches}: ${time}s`;
      timeList.appendChild(li);
  }

  timerDisplay.addEventListener('click', () => {
      if (running) {
          stopTimer();
      } else {
          startTimer();
      }
      running = !running;
  });
});