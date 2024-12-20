// What is the output of the following code?

let x = 1;

function func() {
  let x;
  console.log(x);
}
func();
// Output: undefined
// Explanation: The variable x inside the function func is hoisted to the top of the function scope, but it is not initialized with any value, so it has the value undefined.