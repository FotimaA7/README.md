function calculate() {
    const num = parseInt(document.getElementById('inputNum').value);
    const result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById('output').innerText = `The number is: ${result}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputNum" placeholder="Enter a number" />
`;
