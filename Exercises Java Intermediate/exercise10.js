function generateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciCount').value);
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci Sequence:", fib.slice(0, n));
}
