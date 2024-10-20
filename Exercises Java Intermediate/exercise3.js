function calculate() {
    const obj = {};
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;

    if (key) {
        obj[key] = value;
        document.getElementById('output').innerText = `Object after addition: ${JSON.stringify(obj)}`;
    } else {
        document.getElementById('output').innerText = 'Please enter a key to add.';
    }
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputKey" placeholder="Enter key" />
    <input type="text" id="inputValue" placeholder="Enter value" />
`;
