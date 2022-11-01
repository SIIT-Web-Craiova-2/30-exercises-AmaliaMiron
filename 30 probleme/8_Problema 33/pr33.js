//33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function check(a, b) {
  if (
    (a >= 40 && a <= 60) ||
    (b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100) ||
    (b >= 70 && b <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check(23, 45));
console.log(check(52, 68));
console.log(check(60, 75));
console.log(check(72, 103));
console.log(check(60, 100));
console.log(check(20, 200));
