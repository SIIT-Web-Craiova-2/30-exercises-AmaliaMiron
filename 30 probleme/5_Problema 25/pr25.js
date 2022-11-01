//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
function check(i) {
  if (i % 3 == 0 || i % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check(12));
console.log(check(15));
console.log(check(20));
console.log(check(21));
console.log(check(23));
console.log(check(27));
console.log(check(30));
