//36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function last_digit(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return a % 10 === b % 10 && a % 10 === c % 10 && b % 10 === c % 10;
  } else return false;
}

console.log(last_digit(10, 100, 300));
console.log(last_digit(50, 150, 350));
console.log(last_digit(10, 30, 88));
console.log(last_digit(10, -30, -100));
