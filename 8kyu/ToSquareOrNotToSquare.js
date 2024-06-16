// To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    // 1. loop the array
    // 2. use Number.isInteger to check if the square root doesn't have decimal
    // 3. modify the element based on the result
  for (let i = 0; i < array.length; ++i) {
    let num = array[i];
    if (Number.isInteger(Math.sqrt(num))) array[i] = Math.sqrt(num);
    else array[i] = num * num;
  }
  return array;
}

let input = [4, 3, 9, 7, 2, 1];
// expected = [2, 9, 3, 49, 4, 1];
console.log(squareOrSquareRoot(input));

input = [100, 101, 5, 5, 1, 1];
// expected = [10, 10201, 25, 25, 1, 1];
console.log(squareOrSquareRoot(input));

input = [1, 2, 3, 4, 5, 6];
// expected = [1, 4, 9, 2, 25, 36];
console.log(squareOrSquareRoot(input));