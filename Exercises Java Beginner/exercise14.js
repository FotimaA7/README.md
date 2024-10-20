function removeDuplicates(arr) {
    const uniqueArray = [...new Set(arr)];
    document.getElementById("output").innerText = `Array without duplicates: ${uniqueArray}`;
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
