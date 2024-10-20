function calculate() {
    const numbers = document.getElementById('inputArray').value.split(',').map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    document.getElementById('output').innerText = `Sum of array elements: ${sum}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputArray" placeholder="Enter numbers separated by commas" />
`;
