// What is the output of the following code?

function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(count,message);
  }
  return [increment, log];
}

const [increment, log] = createCounter();
increment();
increment();
increment();

log();

// Output: 3 Count is 0
// The message variable is initialized when the createCounter function is called, and it captures the value of count at that time, which is 0. The log function logs the current value of count and the message variable. Since the message variable is not updated when the count is incremented, it always shows the initial value of count, which is 0.