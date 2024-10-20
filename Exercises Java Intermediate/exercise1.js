function calculate() {
    const numbers = document.getElementById('inputSortArray').value.split(',').map(Number);
    const sortedArray = numbers.sort((a, b) => a - b);
    document.getElementById('output').innerText = `Sorted Array: ${sortedArray.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputSortArray" placeholder="Enter numbers separated by commas" />
`;
