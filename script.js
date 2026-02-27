// script.js
// Adds interactivity to the webpage

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('datetime').innerText = `Current Date and Time (UTC): ${formattedDateTime}`;
}

// Event listener to call the displayDateTime function on page load
window.addEventListener('load', displayDateTime);