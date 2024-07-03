// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
// Mean Square Error
// Complete the function that
// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

var solution = function (firstArray, secondArray) {
  return firstArray.reduce((sum, num, index) => {
    return sum += Math.abs(num - secondArray[index]) ** 2;
  }, 0) / firstArray.length;
//   let length = firstArray.length;
//   let sum = 0;
//   for (let i = 0; i < length; ++i) {
//     let a = firstArray[i];
//     let b = secondArray[i];
//     sum += Math.abs(a - b) ** 2;
//   }
//   return sum / length;
};

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([0, -1], [-1, 0])); // 1
