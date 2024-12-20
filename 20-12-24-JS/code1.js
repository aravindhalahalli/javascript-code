// Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php
// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// using built-in methods
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(12345)) // 54321

// using for loop
function reverseLoopNumber(num) {
    let reversed = '';
    for (let i = num.toString().length - 1; i >= 0; i--) {
        reversed += num.toString()[i];
    }
    return parseInt(reversed);
}
console.log(reverseLoopNumber(12345)) // 54321



// Write a JavaScript function that reverse a string.
// using built-in methods
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")) // olleh

// using for loop
function reverseLoopString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) { // start from the last character
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseLoopString("hello")) // olleh

// using recursion
function reverseRecursionString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseRecursionString(str.substr(1)) + str[0]; // substr(1) removes the first character
    }
}
console.log(reverseRecursionString("hello")) // olleh

