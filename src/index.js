// create new Date object
let date = new Date();

// timer amount times 60 to convert for seconds 
let timer = 25 * 60; 
let breakTimer = 5 * 60;
date.setMinutes(25);
date.setSeconds(0);


// 
(function() {
    const alarmSounds = document.querySelectorAll("select");
    const alarmSelection = M.FormSelect.init(alarmSounds);
    
    let x = date.getSeconds();
    let y = date.getMinutes();

    console.log(`${y} mins +  ${x} seconds`);
    
    console.log(`Timer: ${timer} & Break: ${breakTimer}`);
    console.log(date.getMinutes());
})();


// get the current date to use as a basis for the timer
function getTheDate() {
    date = new Date();
}

/* function to start the clock which
*  takes amount of seconds to count 
*/
function startTheClock(seconds) {
    // get Time from the main timer on the page
    let getTime = document.getElementById("timer").innerText.split(':');

    // set variables for minutes and seconds in milliseconds
    const minutesToMils = getTime[0] * 60 * 1000;
    const secondsToMils = getTime[1] * 1000;

    // var to hold the added value of minutes and seconds
    let totalMils = minutesToMils + secondsToMils;
    console.log(totalMils);
    
    let theClock = window.setTimeout(alarm, totalMils);
    

}

// Function that is activated when alarm goes off 
function alarm() {
    alert("ALARM");
}