function generateRandomNumber(start, end) {
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    document.getElementById("output").innerText = `Random number between ${start} and ${end} is ${randomNumber}`;
}
generateRandomNumber(1, 100);
