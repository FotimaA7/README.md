function findIntersection() {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    const intersection = array1.filter(value => array2.includes(value));
    console.log("Intersection:", intersection);
}
