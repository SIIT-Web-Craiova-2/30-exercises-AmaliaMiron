//125. Write a JavaScript program to find the longest string from a given array.
function longestArr(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > string) {
      string = arr[i];
    }
  }
  return string;
}

console.log(longestArr(["dress", "blouse", "trousers"]));
console.log(longestArr(["alb", "portocaliu", "negru", "galben"]));
