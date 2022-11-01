//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
function diff(a) {
  if (a <= 13) {
    return 13 - a;
  } else {
    return (a - 13) * 2;
  }
}
console.log(diff(4));
console.log(diff(-4));
console.log(diff(13));
console.log(diff(20));
