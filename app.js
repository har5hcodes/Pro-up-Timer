



// Function to display two digits when number less than 10
function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
}


// Set Timer
function setTime(mins) {
    const min = mins;
    const sec = 0;
    display.textContent =
        makeMeTwoDigits(min) + ":" + makeMeTwoDigits(sec);
}

// Start Timer
const display = document.getElementById("countdownDisplay");

function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    const createTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);

        if (--timer < 0) {
            clearInterval(createTimer);
        }
    }, 1000);
}

function startTimer() {
    let durationTime = 60 * min;
    startCountdown(durationTime, display);
}

// Change color theme
// const colors = ["red", "blue", "green", "yellow"];
// const colorBtn = document.getElementById("color-theme");

// colorBtn.addEventListener("click", () => {
//     const randomNumber = 2;
//     document.body.style.backgroundColor = colors[randomNumber];
// })


// Dark theme 
function swapTheme() {
    const element = document.body;
    element.classList.toggle("dark");
}