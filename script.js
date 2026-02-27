// script.js
// Adds interactivity to the webpage

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('datetime').innerText = `Current Date and Time (UTC): ${formattedDateTime}`;
}

// Timer functionality
let timerInterval = null;
let elapsedSeconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.innerText = formatTime(elapsedSeconds);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function stopTimer() {
    pauseTimer();
    elapsedSeconds = 0;
    updateDisplay();
}

function resetTimer() {
    pauseTimer();
    elapsedSeconds = 0;
    updateDisplay();
}

// Event listeners for timer buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Event listener to call the displayDateTime function on page load
window.addEventListener('load', displayDateTime);