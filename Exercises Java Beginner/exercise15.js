function calculate() {
    const now = new Date();
    document.getElementById('output').innerText = `Current date and time: ${now.toLocaleString()}`;
}

document.getElementById('inputs').innerHTML = ''; // No input required for Date and Time
calculate();
