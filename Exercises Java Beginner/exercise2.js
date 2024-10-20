function calculate() {
    const str = document.getElementById('inputStr').value;
    const reversed = str.split('').reverse().join('');
    document.getElementById('output').innerText = `Reversed: ${reversed}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputStr" placeholder="Enter a string" />
`;
