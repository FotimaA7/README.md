function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output').innerText = 'Please enter valid numbers!';
    } else {
        const sum = num1 + num2;
        document.getElementById('output').innerText = `Result: ${sum}`;
    }
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number" />
    <input type="number" id="num2" placeholder="Enter second number" />
`;
