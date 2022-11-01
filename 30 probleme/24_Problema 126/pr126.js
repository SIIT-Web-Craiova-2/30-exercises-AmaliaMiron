//126. Write a JavaScript program to get the largest even number from an array of integers.
function longestArr(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > string) {
      string = arr[i];
    }
  }
  return string;
}

console.log(longestArr(["2", "20", "200", "2000", "20000"]));
