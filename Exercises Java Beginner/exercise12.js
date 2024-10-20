function calculate() {
    const min = parseInt(document.getElementById('inputMin').value);
    const max = parseInt(document.getElementById('inputMax').value);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('output').innerText = `Random number: ${randomNum}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputMin" placeholder="Enter minimum value" />
    <input type="number" id="inputMax" placeholder="Enter maximum value" />
`;
