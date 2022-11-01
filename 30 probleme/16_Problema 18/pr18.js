//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function checktrue(a, b) {
  var sumtrue = a + b;
  if (a === 50 || b === 50 || sumtrue === 50) {
    return true;
  }
}
console.log(checktrue(50, 0));
console.log(checktrue(50, 50));
console.log(checktrue(10, 32));
console.log(checktrue(25, 25));
console.log(checktrue(-10, 60));
console.log(checktrue(40, -2));
