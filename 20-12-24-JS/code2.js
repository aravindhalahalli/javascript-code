// Write an function that returns longest word in a sentence.

// using built-in methods
function longestWord(str) {
  let words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("I woke up early today")) // early

// using for loop
function longestWordLoop(str) {
  let words = str.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWordLoop("I woke up early today")) // early

// using reduce
function longestWordReduce(str) {
  return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(longestWordReduce("I woke up early today")) // early

// using sort
function longestWordSort(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

console.log(longestWordSort("I woke up early today")) // early

// using recursion
function longestWordRecursion(str) {
  let words = str.split(' ');
  if (words.length === 1) {
    return words[0];
  }
  if (words[0].length >= words[1].length) {
    words.splice(1, 1);
  } else {
    words.splice(0, 1);
  }
  return longestWordRecursion(words.join(' '));
}

console.log(longestWordRecursion("I woke up early today")) // early