// https://www.codewars.com/kata/52f677797c461daaf7000740

// Smallest possible sum

// Description
// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

// X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
// X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
// X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
// X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
// X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
// The returning output is the sum of the final transformation (here 9).

// Example
// solution([6, 9, 21]) #-> 9
// Solution steps:
// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3
// Additional notes:
// There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.

function solution(numbers) {
  let length = numbers.length;
  // check array if transformation is required
  if (!length) return 0;
  if (length == 1) return numbers[0];

  //   // sort descending
  //   let sorted = numbers.sort((a, b) => b - a);
  //   let i = 0;

  //   // loop until all numbers are same
  //   while (i < length - 1) {
  //     if (sorted[i] > sorted[i + 1]) {
  //       sorted[i] -= sorted[i + 1]; // transform
  //       sorted = sorted.sort((a, b) => b - a); // re-sort
  //       i = 0; // start from top
  //     }
  //     else ++i;
  //   }

  //   return sorted[0] * length;

  // TODO: optimization
  // 1. if lowest number is 1, we can early out
  // 2. if the lowest number is 2, AND all the numbers are even, we can assume LCD is 2
  // 3. otherwise, find the LCD OR 1
  let sorted = numbers.sort((a, b) => b - a);
  if (sorted[length - 1] == 1)
    return length;

}

console.log(solution([6, 9, 21]));
