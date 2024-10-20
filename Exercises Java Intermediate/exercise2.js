function calculate() {
    const email = document.getElementById('inputEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    document.getElementById('output').innerText = isValid ? "Valid email address." : "Invalid email address.";
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputEmail" placeholder="Enter email address" />
`;
