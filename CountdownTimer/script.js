const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resumeButton = document.getElementById('resumeButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

let timer; 
let valueInSeconds;
let isPaused = false;

function startTimer() {
    valueInSeconds = parseInt(timeInput.value);

    if (isNaN(valueInSeconds)) {
        countdownDisplay.innerText = 'Please enter a valid number';
        return;
    }

    if (valueInSeconds <= 0) {
        countdownDisplay.innerText = 'Please enter seconds > 0';
        return;
    }

    clearInterval(timer); // Stop any previous timer
    isPaused = false;
    runTimer();
}

function runTimer() {
    timer = setInterval(function () {
        if (!isPaused) {
            countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

            if (valueInSeconds <= 0) {
                clearInterval(timer);
                countdownDisplay.innerText = 'Time is up!';
                return;
            }

            valueInSeconds--; // Decrement time
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
}

function resumeTimer() {
    if (isPaused) {
        isPaused = false;
        runTimer(); // Resume countdown
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
