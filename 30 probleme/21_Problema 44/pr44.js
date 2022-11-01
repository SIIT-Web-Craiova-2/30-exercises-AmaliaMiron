//44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.
function greater(a, b, c) {
  if (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c > a || c > a))
  ) {
    return "greater or equal than 20";
  } else {
    return "less than 20";
  }
}
console.log(greater(20, 21, 21));
console.log(greater(20, 20, 20));
console.log(greater(19, 20, 5));
console.log(greater(42, 51, 32));
console.log(greater(20, 2, 21));
