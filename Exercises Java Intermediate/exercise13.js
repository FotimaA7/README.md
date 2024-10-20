function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function calculate() {
    const objString = document.getElementById('inputObject').value;
    const obj = JSON.parse(objString);
    const clonedObj = deepClone(obj);
    document.getElementById('output').innerText = `Cloned Object: ${JSON.stringify(clonedObj)}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputObject" placeholder='Enter an object (e.g., {"a":1,"b":2})' />
`;
