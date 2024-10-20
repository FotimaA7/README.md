function checkPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    const isPalindrome = str === reversed;
    document.getElementById("output").innerText = `${str} is ${isPalindrome ? '' : 'not '}a palindrome`;
}

// Example usage
checkPalindrome("madam");
