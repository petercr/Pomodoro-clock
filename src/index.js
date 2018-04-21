let timer = parseInt(document.getElementById('timer').innerText);
let breakTimer = parseInt(document.getElementById('breakTimer').innerText);
let date = new Date();

// 
(function() {
    date.setMinutes(timer - 1);
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