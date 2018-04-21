let date = new Date();
let timer = 25 * 60;
let breakTimer = 5 * 60;
date.setMinutes(timer / 60);
date.setSeconds(timer);


// 
(function() {
    
    let x = date.getSeconds();
    let y = date.getMinutes();

    console.log(`${x}  +  ${y}`);
    
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

}