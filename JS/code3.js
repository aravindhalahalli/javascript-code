// What is the output of the following code?

console.log(greet("Aravind"));

function greet(name) {
  return `Hello ${name}`;
}

const sayHi = function () {
  console.log("Hi There");
};

sayHi();

// Output: Hello Aravind and Hi There
// The function greet is hoisted to the top of the file. So, it can be called before the function definition. So, the output will be Hello Aravind.