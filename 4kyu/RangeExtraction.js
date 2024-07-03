// Range Extraction
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
// A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

function solution(list) {
  let rv = String(list[0]);
  let sequenceCount = 0;
  
  for (let i = 1; i < list.length; ++i) {
    let prev = list[i - 1];
    let curr = list[i];

    // Check to see if current number is sequential and set its count
    // reset it if the sequence is broken
    sequenceCount = curr - prev == 1 ? sequenceCount + 1 : 0;

    // If at least 3 numbers are in sequence...
    if (sequenceCount > 1) {
      // replace the last number by counting its char length and adding 1 (either ',' or '-')
      rv = rv.slice(0, -(String(prev).length + 1)) + `-${curr}`;
    } else {
      // Otherwise just add the new number
      rv += `,${curr}`;
    }
  }

  return rv;
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
