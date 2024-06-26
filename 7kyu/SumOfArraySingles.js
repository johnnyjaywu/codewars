// Sum of array singles
// https://www.codewars.com/kata/59f11118a5e129e591000134
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return arr.reduce((sum, item) => {
    if (!duplicates.includes(item)) return sum + item;
    return sum;
  }, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8])); // 15
console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
console.log(repeats([5, 10, 19, 13, 10, 13])); // 24