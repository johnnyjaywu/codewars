// https://www.codewars.com/kata/55de6173a8fbe814ee000061

// Filter unused digits

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
  let unused = "";
  for (let i = 0; i <= 9; ++i) {
    if (!Array.from(arguments).join("").includes(i)) unused += i;
  }
  return unused;
}

console.log(unusedDigits(12, 34, 56, 78));
