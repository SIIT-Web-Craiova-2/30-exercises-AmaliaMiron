//39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function Sum(a, b) {
  var sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(Sum(15, 50));
console.log(Sum(90, 98));
console.log(Sum(65, 73));
