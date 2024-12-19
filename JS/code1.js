// 1. what is the output of the following code?
// what is closure?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function closure() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const count1 = closure();
const count2 = closure();

console.log(count1());
console.log(count1());
console.log(count1());

console.log(count2());

// Output: 1 2 3 1