//41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
function verify(a, b, c) {
  if (a === b && b === c && a === c) {
    return 30;
  }
  if (a === b || b === c) {
    return 40;
  } else {
    return 20;
  }
}

console.log(verify(20, 20, 25));
console.log(verify(5, 5, 5));
console.log(verify(5, 8, 9));
console.log(verify(32, 61, 61));
