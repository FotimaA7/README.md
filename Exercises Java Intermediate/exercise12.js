function calculate() {
    const array1 = document.getElementById('inputArray1').value.split(',').map(Number);
    const array2 = document.getElementById('inputArray2').value.split(',').map(Number);
    const intersection = array1.filter(value => array2.includes(value));
    document.getElementById('output').innerText = `Intersection: ${intersection.join(', ')}`;
}

document.getElementById('inputs').innerHTML = `
    <input type="text" id="inputArray1" placeholder="Enter first array" />
    <input type="text" id="inputArray2" placeholder="Enter second array" />
`;
