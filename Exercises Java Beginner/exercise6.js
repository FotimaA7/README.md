function calculate() {
    const str = document.getElementById('inputPalindrome').value;
    const reversed = str.split('').reverse().join('');
    const isPalindrome = str === reversed;
    document.getElementById('output').innerText = isPalindrome ? "The string is a palindrome." : "The string is not a palindrome.";
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputPalindrome" placeholder="Enter a string" />
`;
