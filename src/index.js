let timer = parseFloat(document.getElementById('timer').innerText);
let breakTimer = parseFloat(document.getElementById('breakTimer').innerText);
let date = new Date();

// 
(function() {
    date.setMinutes(timer - 1);
    
    console.log(`Timer: ${timer} & Break: ${breakTimer}`);
    console.log(date.getMinutes());
})();


// get the current date to use as a basis for the timer
function getTheDate() {
    date = new Date();
}