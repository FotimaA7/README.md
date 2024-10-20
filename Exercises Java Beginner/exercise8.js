function factorial(n) {
    const result = n === 0 ? 1 : n * factorial(n - 1);
    document.getElementById("output").innerText = `Factorial of ${n} is ${result}`;
}
factorial(5);
