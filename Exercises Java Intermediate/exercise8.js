function calculate() {
    const numbers = document.getElementById('inputUniqueArray').value.split(',').map(Number);
    const uniqueValues = [...new Set(numbers)];
    document.getElementById('output').innerText = `Unique values: ${uniqueValues.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputUniqueArray" placeholder="Enter numbers separated by commas" />
`;
