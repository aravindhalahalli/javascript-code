// What is the output of the following code?

const { a: x, b: y } = { a: 1, b: 2, c: 3 };
console.log(x, y);
// Output: 1 2

const { a: p = 10, b: q = 20, c: r = 30 } = { a: 1, b: undefined, d: 4 };
console.log(p, q, r);
// Output: 1 20 30
