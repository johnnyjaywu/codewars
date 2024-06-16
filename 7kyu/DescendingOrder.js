// Descending Order https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    // 1. convert input into a string
    // 2. String.split into arrays of individual characters
    // 3. sort in alphabetical order
    // 4. reverse the order
    // 5. combine back into single string
    // 6. Unary + operator converts string to a Number
  return +String(n).split("").sort().reverse().join("");
}

console.log(descendingOrder("asdf"));
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(123456789)); // 987654321