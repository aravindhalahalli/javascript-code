// What is the output of the following code?

function mystery(x) {
  if (typeof x === "number") {
    return x.toString();
  } else if (typeof x === "string") {
    return x.parseInt();
  } else {
    return "unknown";
  }
}

console.log(mystery(5));
console.log(mystery("5"));
console.log(mystery(null));
console.log(mystery([1,2,3,4]));
console.log(mystery({}));
console.log(mystery(true))

// Output: 5 5 unknown unknown unknown unknown