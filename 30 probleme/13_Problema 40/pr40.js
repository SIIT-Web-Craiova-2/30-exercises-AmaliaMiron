//40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function checkIntegers(a, b) {
  var sum = a + b;
  var diff = a - b;
  if (a == 8 || b == 8 || sum == 8 || diff == 8) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIntegers(8, 8));
console.log(checkIntegers(8, 0));
console.log(checkIntegers(12, 5));
console.log(checkIntegers(4, 4));
console.log(checkIntegers(-3, 5));
console.log(checkIntegers(10, -2));
console.log(checkIntegers(15, 7));
