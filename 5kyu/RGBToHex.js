// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  let toHex = (x) =>
    ("0" + Math.round(Math.min(Math.max(x, 0), 255)).toString(16))
      .slice(-2)
      .toUpperCase();
  return toHex(r) + toHex(g) + toHex(b);
}

console.log(rgb(255, 255, 255)); //FFFFFF
console.log(rgb(255, 255, 300)); //FFFFFF
console.log(rgb(0, 0, 0)); //000000
console.log(rgb(148, 0, 211)); //9400D3
console.log(rgb(55.55, 244, 0.55));
