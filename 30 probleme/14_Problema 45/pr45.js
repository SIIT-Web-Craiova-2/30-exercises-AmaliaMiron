//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
function checkInteg(a, b) {
  var sum = a + b;
  var diff = a - b;
  if (a == 15 || b == 15 || sum == 15 || diff == 15) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteg(15, 15));
console.log(checkInteg(15, 0));
console.log(checkInteg(12, 3));
console.log(checkInteg(7, 5));
console.log(checkInteg(-5, 10));
console.log(checkInteg(20, -5));
console.log(checkInteg(8, 7));
console.log(checkInteg(13, 2));
