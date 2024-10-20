function calculate() {
    const str = document.getElementById('inputVowels').value;
    const vowels = str.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    document.getElementById('output').innerText = `Number of vowels: ${count}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputVowels" placeholder="Enter a string" />
`;
