//34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function check(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    if (a === b) {
      return "Same numbers";
    } else if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return "Numbers are not good";
  }
}

console.log(check(43, 46));
console.log(check(42, 42));
console.log(check(55, 83));
console.log(check(72, 90));
console.log(check(70, 77));
