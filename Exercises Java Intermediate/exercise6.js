function calculate() {
    const str1 = document.getElementById('inputStr1').value;
    const str2 = document.getElementById('inputStr2').value;

    const isAnagram = (str1.split('').sort().join('') === str2.split('').sort().join(''));
    document.getElementById('output').innerText = isAnagram ? "They are anagrams." : "They are not anagrams.";
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputStr1" placeholder="Enter first string" />
    <input type="text" id="inputStr2" placeholder="Enter second string" />
`;
