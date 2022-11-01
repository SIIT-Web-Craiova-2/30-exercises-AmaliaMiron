//46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.
function multiple(a, b) {
  if (a % 7 == 0 || b % 7 == 0) {
    return true;
  }
  if (a % 11 == 0 || b % 11 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(multiple(7, 43));
console.log(multiple(11, 21));
console.log(multiple(12, 38));
console.log(multiple(56, 44));
console.log(multiple(33, 63));
console.log(multiple(19, 20));
console.log(multiple(22, 40));
