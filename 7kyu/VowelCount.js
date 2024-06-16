// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let match = str.match(/[aeiou]/g);
  return match ? match.length : 0;
}

console.log(getCount("ddddddd")); //0
console.log(getCount("aeiou")); //5
console.log(getCount("apple")); //2