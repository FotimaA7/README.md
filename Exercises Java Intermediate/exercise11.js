function calculate() {
    const sentence = document.getElementById('inputSentence').value;
    const capitalized = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('output').innerText = `Capitalized Sentence: ${capitalized}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputSentence" placeholder="Enter a sentence" />
`;
