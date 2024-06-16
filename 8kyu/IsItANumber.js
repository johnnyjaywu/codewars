// Is it a number?
// https://www.codewars.com/kata/57126304cdbf63c6770012bd
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  return parseFloat(s) == s;
}

console.log(isDigit("Log"));
console.log(isDigit("s2324"));
console.log(isDigit("3 4"));
console.log(isDigit("3-4"));
console.log(isDigit("3  4   "));
console.log(isDigit("34.65"));
console.log(isDigit("-0"));
console.log(isDigit(" "));