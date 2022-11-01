//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function check(a, b, c) {
  if ((a >= 50 && a <= 99) || (b >= 49 && b <= 99) || (c >= 49 && c <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(23, 45, 103));
console.log(check(52, 68, 97));
console.log(check(60, 75, 143));
