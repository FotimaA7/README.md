function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    alert(`Email is ${regex.test(email) ? 'valid' : 'invalid'}`);
}
