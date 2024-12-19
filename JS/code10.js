// What is the output of the following code?
async function asynFunc() {
  return await Promise.resolve("Hello");
}

asynFunc().then((value) => console.log(value));
console.log("world");

// Output: world Hello
