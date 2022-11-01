//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum3(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}
console.log(sum3(1, 3));
console.log(sum3(10, 20));
console.log(sum3(0, 5));
console.log(sum3(2, 2));
