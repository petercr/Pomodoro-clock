// timer amount times 60 to convert for seconds
let timer = 25 * 60;
let breakTimer = 5 * 60;

// IEEF fucntion to call on DOM load
(function() {
  // initialize the drop down menu from Materialize CSS
  const alarmSounds = document.querySelectorAll("select");
  const alarmSelection = M.FormSelect.init(alarmSounds);

  // add event listener for the start button
  document.querySelector("#startButton").addEventListener("click", () => {
    let getTimeArr = document.getElementById("timer").innerText.split(":");
    let duration = parseInt(getTimeArr[0] * 60);
    duration += parseInt(getTimeArr[1]);
    console.log(duration);

    startTheClock(duration);
  });
})();

function startTheClock(duration) {
  let start = Date.now(),
    diff,
    minutes,
    seconds;

  const display = document.querySelector("#timer");

  function timer() {
    // const display = document.querySelector("#timer");
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    minutes = (diff / 60) | 0;
    seconds = (diff % 60) | 0;

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

  
}

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
