function deepCloneObject() {
    const obj = { a: 1, b: { c: 2 } };
    const clone = JSON.parse(JSON.stringify(obj));
    console.log("Deep Cloned Object
