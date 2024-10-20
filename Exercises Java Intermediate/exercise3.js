function manipulateObject() {
    let obj = { name: "Alice", age: 25 };
    obj.city = "New York";
    delete obj.age;
    obj.name = "Bob";
    console.log("Updated Object:", obj);
}
