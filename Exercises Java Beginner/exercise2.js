function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    console.log("Reversed: " + reversed);
    document.getElementById("output").innerHTML = "Reversed: " + reversed;
}


reverseString("hello");
