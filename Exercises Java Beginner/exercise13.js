function numberToString(n) {
    const str = n.toString();
    document.getElementById("output").innerText = `String representation of ${n} is "${str}"`;
}
numberToString(123);
