// What is the output of the following code?

const person = {
  name: "Aravind",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
}
const greet = person.greet;
greet();

// Output: Hello, my name is undefined
// The greet function is called without any context, so the this keyword inside the greet function refers to the global object. Since the name property is not defined in the global object, the output will be Hello, my name is undefined.
