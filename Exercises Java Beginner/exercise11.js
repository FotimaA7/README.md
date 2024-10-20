function sumOfArrayElements(arr) {
    const sum = arr.reduce((sum, num) => sum + num, 0);
    document.getElementById("output").innerText = `Sum of array elements is ${sum}`;
}
sumOfArrayElements([1, 2, 3, 4, 5]);
