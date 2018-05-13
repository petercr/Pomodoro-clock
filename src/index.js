

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
        startTheClock();
    })
    
    
})();


function startTheClock(seconds) {

    // get Time from the main timer on the page
    let getTimeArr = document.getElementById("timer").innerText.split(':');

    // set variables for minutes and seconds in milliseconds
    const minutesToMils = getTimeArr[0] * 60 * 1000;
    const secondsToMils = getTimeArr[1] * 1000;

    // var to hold the added value of minutes and seconds
    let totalMils = minutesToMils + secondsToMils;
    console.log(totalMils);
    
    // waits the total minutes and seconds then calls alarm()
    let theClock = window.setTimeout(alarm, totalMils);
    if (theClock != null) {
        console.log("timer started");
    }

    // add event listener for the stop button
    document.querySelector("#stopButton").addEventListener("click", function(theClock){
        stopTheClock(theClock);
    });

    

}

// Function that is activated when alarm goes off 
function alarm() {
    alert("ALARM");
}

// Function to handle the seconds clock
function secondsTicker() {
    let seconds = document.getElementById("timer").textContent;

}

// Function to stop the clock
function stopTheClock(clock) {
    window.clearTimeout(clock);
    console.log("timer stopped");
}