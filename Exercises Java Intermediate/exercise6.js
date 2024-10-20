function checkAnagram() {
    const str1 = document.getElementById('str1').value;
    const str2 = document.getElementById('str2').value;
    const isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');
    alert(`The strings are ${isAnagram ? 'anagrams' : 'not anagrams'}`);
}
