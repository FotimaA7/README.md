function calculate() {
    const numbers = document.getElementById('inputNumbers').value.split(',').map(Number);
    const largest = Math.max(...numbers);
    document.getElementById('output').innerText = `Largest number: ${largest}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputNumbers" placeholder="Enter numbers separated by commas" />
`;
