function findLargestNumber(arr) {
    const largest = Math.max(...arr);
    document.getElementById("output").innerText = `The largest number is ${largest}`;
}

// Example usage
findLargestNumber([10, 20, 30, 40, 50]);
