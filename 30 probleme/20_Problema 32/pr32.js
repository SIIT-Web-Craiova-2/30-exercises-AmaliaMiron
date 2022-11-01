//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function value(a, b) {
  var num1 = 100 - a;
  var num2 = 100 - b;
  if (num1 < num2) {
    return a;
  } else return b;
}
console.log(value(90, 85));
console.log(value(25, 70));
console.log(value(5, 20));
console.log(value(50, 65));
