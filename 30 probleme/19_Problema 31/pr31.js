//31. Write a JavaScript program to find the largest of three given integers.
function findInteger(a, b, c) {
  if ((a > b) & (a > c)) {
    return "The largest integer is: a ";
  } else if (b > a && b > c) {
    return " The largest integer is: b";
  } else if (c > a && c > b) {
    return " The largest integer is: c";
  }
}
console.log(findInteger(5, 15, 30));
console.log(findInteger(20, 10, 60));
console.log(findInteger(70, 45, 20));
console.log(findInteger(32, 87, 55));
console.log(findInteger(120, 75, 98));
console.log(findInteger(45, 92, 3));
