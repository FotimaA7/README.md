function calculate() {
    const num1 = parseFloat(document.getElementById('inputCalc1').value);
    const operator = document.getElementById('inputCalcOperator').value;
    const num2 = parseFloat(document.getElementById('inputCalc2').value);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }
    document.getElementById('output').innerText = `Result: ${result}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputCalc1" placeholder="Enter first number" />
    <input type="text" id="inputCalcOperator" placeholder="Enter operator (+, -, *, /)" />
    <input type="number" id="inputCalc2" placeholder="Enter second number" />
`;
