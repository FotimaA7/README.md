function checkEvenOdd(num) {
    let result = num % 2 === 0 ? "Even" : "Odd";
    console.log("Number is: " + result);
    document.getElementById("output").innerHTML = "Number is: " + result;
}

// Example usage:
checkEvenOdd(7);
