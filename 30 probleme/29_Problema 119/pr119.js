//119. Write a JavaScript program to check whether a given integer has an increasing digits sequence.
function digits(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(digits([5, 7, 10]));
console.log(digits([30, 29, 28]));
console.log(digits([23, 24, 25]));
console.log(digits([-5, 0, 5]));
console.log(digits([-5, -7, 6]));
