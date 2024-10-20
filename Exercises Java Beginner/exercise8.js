const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);

function calculate() {
    const num = parseInt(document.getElementById('inputFactorial').value);
    const result = factorial(num);
    document.getElementById('output').innerText = `Factorial: ${result}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputFactorial" placeholder="Enter a number" />
`;
