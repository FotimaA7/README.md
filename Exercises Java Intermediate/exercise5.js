function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculate() {
    const limit = parseInt(document.getElementById('inputLimit').value);
    const primes = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }

    document.getElementById('output').innerText = `Prime numbers up to ${limit}: ${primes.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputLimit" placeholder="Enter a limit" />
`;
