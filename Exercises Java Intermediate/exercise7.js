function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

function calculate() {
    const nestedArray = JSON.parse(document.getElementById('inputNestedArray').value);
    const flattened = flattenArray(nestedArray);
    document.getElementById('output').innerText = `Flattened Array: ${flattened.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputNestedArray" placeholder='Enter nested array (e.g., [[1,2],[3,4],[5]])' />
`;
