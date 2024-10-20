function calculate() {
    const numbers = document.getElementById('inputDuplicates').value.split(',').map(Number);
    const uniqueNumbers = [...new Set(numbers)];
    document.getElementById('output').innerText = `Unique numbers: ${uniqueNumbers.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputDuplicates" placeholder="Enter numbers separated by commas" />
`;
