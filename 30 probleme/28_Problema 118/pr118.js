//118. Write a JavaScript program to check whether a given number is in a given range.
function checkRange(a, b, c) {
  return b >= a && b <= c;
}

console.log(checkRange(5, 10, 15));
console.log(checkRange(0, 32, 110));
console.log(checkRange(-5, -10, 25));
console.log(checkRange(14, 88, 20));
