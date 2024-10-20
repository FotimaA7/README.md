function calculate() {
    const celsius = parseFloat(document.getElementById('inputCelsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('output').innerText = `Temperature in Fahrenheit: ${fahrenheit}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputCelsius" placeholder="Enter Celsius" />
`;
