// https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

// Convert Hash To An Array

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

function convertHashToArray(hash) {
//   const arr = [];
//   for (let key in hash) {
//     arr.push([key, hash[key]]);
//   }
//   return arr;

  return Object.entries(hash);
}

//const convertHashToArray = Object.entries;

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
