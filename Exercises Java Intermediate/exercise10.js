function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function calculate() {
    const n = parseInt(document.getElementById('inputFibonacci').value);
    const fibonacciSequence = generateFibonacci(n);
    document.getElementById('output').innerText = `Fibonacci sequence: ${fibonacciSequence.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputFibonacci" placeholder="Enter n for Fibonacci sequence" />
`;
