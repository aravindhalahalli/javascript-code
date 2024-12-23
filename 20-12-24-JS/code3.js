// write a function check whether given number / string is palindrome or not

// palindrome: A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward

// built-in functions: split(), reverse(), join()
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome('madam')); // true

function isPalindromeNumber(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}   

console.log(isPalindromeNumber(121)); // true

// without using built-in functions

function isPalindrome2(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome2('madam')); // true

function isPalindromeNumber2(num) {   
    let reversedNum = 0;
    let originalNum = num;
    while (num > 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

console.log(isPalindromeNumber2(121)); // true

// using recursion

function isPalindrome3(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome3(str.slice(1, str.length - 1));
    }
    return false;
}

console.log(isPalindrome3('madam')); // true

function isPalindromeNumber3(num) {
    function reverseNum(num, reversedNum) {
        if (num === 0) {
            return reversedNum;
        }
        return reverseNum(Math.floor(num / 10), reversedNum * 10 + num % 10);
    }
    return num === reverseNum(num, 0);
}

console.log(isPalindromeNumber3(121)); // true

// using reduce

function isPalindrome4(str) {
    return str.split('').reduce((acc, char, index) => {
        return acc && char === str[str.length - 1 - index];
    }, true);
}

console.log(isPalindrome4('madam'));    // true

function isPalindromeNumber4(num) {
    return num.toString().split('').reduce((acc, digit, index, arr) => {
        return acc && digit === arr[arr.length - 1 - index];
    }, true);
}

console.log(isPalindromeNumber4(121)); // true


