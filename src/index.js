// create new Date object
let date = new Date();

// timer amount times 60 to convert for seconds 
let timer = 25 * 60; 
let breakTimer = 5 * 60;
date.setMinutes(25);
date.setSeconds(0);


// 
(function() {
    
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
    let mainTimer = document.getElementById("timer");

    setInterval(function(){
        if (mainTimer.innerText == 0){
            clearInterval();
        }
        let currentTime = parseInt(mainTimer.innerText);
        currentTime -= 1;
        mainTimer.innerText = currentTime.toString();
    }, 1000);

}