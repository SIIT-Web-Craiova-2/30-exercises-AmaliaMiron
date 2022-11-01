//33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function check(a, b) {
  return (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  );
}
console.log(check(30, 40));
console.log(check(40, 53));
console.log(check(60, 70));
console.log(check(57, 90));
console.log(check(40, 100));
