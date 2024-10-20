function countVowels(s) {
    const count = (s.match(/[aeiou]/gi) || []).length;
    document.getElementById("output").innerText = `Number of vowels in "${s}" is ${count}`;
}
countVowels("hello world");
