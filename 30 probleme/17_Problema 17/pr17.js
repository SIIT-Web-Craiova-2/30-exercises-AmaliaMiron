//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function diff(a) {
  if (a <= 19) {
    return 19 - a;
  } else {
    return (a - 19) * 3;
  }
}
console.log(diff(5));
console.log(diff(-5));
console.log(diff(25));
console.log(diff(50));
