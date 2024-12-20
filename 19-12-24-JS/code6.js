// What is the output of the following code?

function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
// Output: undefined 2
// The variable a is hoisted to the top of the function scope, but it is not initialized. So, the value of a is undefined. The function foo is also hoisted to the top of the function scope, and it returns 2. So, the output will be undefined 2.
