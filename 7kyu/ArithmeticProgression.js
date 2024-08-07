// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript

// Arithmetic progression

// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, d, n) {
  // loop array n - 1 times (we skip 1 because we initialize arr with a at index 0)
  // add (d * i + a) as a new element
  // join arr with ', '
  const arr = [a];
  for (let i = 1; i < n; ++i) {
    arr.push(arr[0] + d * i);
  }
  return arr.join(", ");
}

console.log(arithmeticSequenceElements(1, 2, 5)); //"1, 3, 5, 7, 9"
