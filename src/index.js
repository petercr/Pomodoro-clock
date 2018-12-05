// timer amount times 60 to convert for seconds
let timer = 25 * 60;
let breakTimer = 5 * 60;

M.AutoInit();

// IEEF function to call on DOM load
(function() {
  function dropDown(e) {
    let stuff = e.target.value;
    console.log(stuff);
  }

  // add event listener for the start button
  document.querySelector("#startButton").addEventListener("click", () => {
    let getTimeArr = document.getElementById("timer").innerText.split(":");
    let duration = parseInt(getTimeArr[0] * 60);
    duration += parseInt(getTimeArr[1]);
    console.log(duration);

    startTheClock(duration);
  });
})();

// function to start the clock timer
function startTheClock(duration) {
  let start = Date.now(),
    diff,
    minutes,
    seconds;

  const display = document.querySelector("#timer");

  function timer() {
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (diff <= 0) {
      // add one second so that the count down starts at the full duration
      // example 05:00 not 04:59
      start = Date.now() + 1000;
    }
  }
  // we don't want to wait a full second before the timer starts
  timer();
  let mainTimer = setInterval(timer, 1000);
  let alarmTimer = setTimeout(alarm, duration * 1000);

  // add event listener for the stop button
  document
    .querySelector("#stopButton")
    .addEventListener("click", function(theClock) {
      //   stopTheClock(theClock);
      window.clearInterval(mainTimer);
      window.clearTimeout(alarmTimer);
    });
} // end of timer()

// Function that is activated when alarm goes off
function alarm() {
  alert("ALARM");
}

// Function to stop the clock
function stopTheClock(clock) {
  window.clearTimeout(alarmTimer);
  window.clearInterval(mainTimer);
  console.log("timer stopped");
}

// Function for timer up & down buttons
function adjustTimer(direction) {
  // variables to hold the DOM elements of timer and break timer
  const timerDisplay = document.querySelector("#timer");
  const breakDisplay = document.querySelector("#breakTimer");

  // turn both the timer and break timer into arrays with minutes and seconds
  let getTimeArr = timerDisplay.innerText.split(":");
  let getBreakArr = breakDisplay.innerText.split(":");

  if (direction === "up") {
    let minutes = parseInt(getTimeArr[0]);
    minutes++;
    timerDisplay.innerText = minutes + ":" + getTimeArr[1];
  } else if (direction === "down") {
    let minutes = parseInt(getTimeArr[0]);
    minutes--;
    timerDisplay.innerText = minutes + ":" + getTimeArr[1];
  } else if (direction === "breakUp") {
    let minutes = parseInt(getBreakArr[0]);
    minutes++;
    breakDisplay.innerText = minutes + ":" + getBreakArr[1];
  } else if (direction === "breakDown") {
    let minutes = parseInt(getBreakArr[0]);
    minutes--;
    breakDisplay.innerText = minutes + ":" + getBreakArr[1];
  }
}
