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
  // check array if transformation is required
  let length = numbers.length;
  if (!length) return 0;
  if (length == 1) return numbers[0];

  // Basic solution:
  // let sorted = numbers.sort((a, b) => b - a);
  // let i = 0;

  // while (i < length - 1) {
  //   if (sorted[i] > sorted[i + 1]) {
  //     sorted[i] -= sorted[i + 1]; // transform
  //     sorted = sorted.sort((a, b) => b - a); // re-sort
  //     i = 0; // start from top
  //   }
  //   else ++i;
  // }

  // return sorted[0] * length;

  // TODO: Optimized solution

  // 1. loop and perform modulo transformation of 2 values
  // *at any point, if the number is 1, we can early out

  // 2. use modulo to quickly transform the numbers to get their smallest difference

  // 3. once we figure out the smallest value, our result is min * length

  // let min = Math.max(...numbers) % Math.min(...numbers);
  // if (min == 0) min = Math.min(...numbers);

  // if (min > 1) {
  //   let i = 0;
  //   while (i < length) {
  //     let curr = numbers[i];
  //     if (curr != min) {
  //       let remainder = curr > min ? curr % min : min % curr;
  //       if (remainder != 0) {
  //         min = remainder;
  //         if (min == 1)
  //           return length;
  //         i = 0;
  //       } else i++;
  //     } else i++;
  //   }
  // }

  // return min * length;

  const gcd = (a,b)=>a?gcd(b%a,a):b
  return numbers.reduce(gcd)*numbers.length
}

console.log(solution([9, 6, 21, 27, 30]));
console.log(solution([3, 13, 23, 7, 83]));
console.log(
  solution([
    1487647, 351232, 1606087, 1026823, 105903, 34300, 1487647, 77175, 297052,
    1246588,
  ])
);

console.log(
  solution([
    33280951, 21398839, 25009600, 44144496, 17169856, 10682991, 7565404,
    33902044, 59533056, 72581751, 77532631,
  ])
);
