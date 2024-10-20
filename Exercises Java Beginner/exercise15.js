function printCurrentDateTime() {
    const now = new Date().toLocaleString();
    document.getElementById("output").innerText = `Current date and time: ${now}`;
}
printCurrentDateTime();
