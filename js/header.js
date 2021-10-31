const buttonDiscover = document.querySelector(".discover");
// for (let i = 0; i < 1; i++) {
// buttonDiscover.innerText += "!";
// };

// buttonDiscover.hidden = true;
// setInterval( () => buttonDiscover.hidden = !buttonDiscover.hidden, 10000 );

const clockContainer = document.querySelector(".clock");
setInterval( () => clockContainer.innerText = new Date ().toLocaleTimeString(), 1000 );

const countDownContainer = document.querySelector(".countdown");

const startTime = new Date();
function showCountDown () {
    const limit = 10;
    const currentTime = new Date ();
    const interval = Math.round((currentTime - startTime) / 1000);
    const leftSecs = limit 
    
}
