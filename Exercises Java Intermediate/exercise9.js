function calculate() {
    const str = document.getElementById('inputMainStr').value;
    const substring = document.getElementById('inputSubstring').value;
    const isPresent = str.includes(substring);
    document.getElementById('output').innerText = isPresent ? "Substring is present." : "Substring is not present.";
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputMainStr" placeholder="Enter main string" />
    <input type="text" id="inputSubstring" placeholder="Enter substring" />
`;
