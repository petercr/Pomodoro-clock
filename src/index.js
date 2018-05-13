

// timer amount times 60 to convert for seconds 
let timer = 25 * 60; 
let breakTimer = 5 * 60;



// 
(function() {
    // initialize the drop down menu from Materialize CSS
    const alarmSounds = document.querySelectorAll("select");
    const alarmSelection = M.FormSelect.init(alarmSounds);
    
    
})();


function startTheClock(seconds) {
    // get Time from the main timer on the page
    let getTime = document.getElementById("timer").innerText.split(':');

    // set variables for minutes and seconds in milliseconds
    const minutesToMils = getTime[0] * 60 * 1000;
    const secondsToMils = getTime[1] * 1000;

    // var to hold the added value of minutes and seconds
    let totalMils = minutesToMils + secondsToMils;
    console.log(totalMils);
    
    // waits the total minutes and seconds then calls alarm()
    let theClock = window.setTimeout(alarm, totalMils);
    

}

// Function that is activated when alarm goes off 
function alarm() {
    alert("ALARM");
}