let sec = 0;
let min = 0;
let display = document.getElementById("countdown");

function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
}

function setTime(mins) {
    min = mins;
    display.textContent =
        makeMeTwoDigits(min) + ":" + makeMeTwoDigits(sec);
}

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