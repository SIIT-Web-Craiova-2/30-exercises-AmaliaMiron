//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function check(a, b) {
  if ((a >= 50 && a <= 99) || (b >= 49 && b <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(45, 103));
console.log(check(52, 97));
