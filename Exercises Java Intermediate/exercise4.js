function calculate() {
    const text = document.getElementById('inputText').value;
    const words = text.split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    document.getElementById('output').innerText = `Word occurrences: ${JSON.stringify(wordCount)}`;
}

document.getElementById('inputs').innerHTML = `
    <textarea id="inputText" placeholder="Enter text"></textarea>
`;
