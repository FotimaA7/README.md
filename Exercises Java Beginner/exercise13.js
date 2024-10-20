function calculate() {
    const num = document.getElementById('inputNumberToString').value;
    const str = num.toString();
    document.getElementById('output').innerText = `String representation: ${str}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputNumberToString" placeholder="Enter a number" />
`;
