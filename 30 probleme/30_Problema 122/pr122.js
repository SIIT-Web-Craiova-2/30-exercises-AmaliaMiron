//122. Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.
function incrDecr(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] == 1 || arr[i + 1] - arr[i] == -1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(incrDecr([1, 2, 3]));
console.log(incrDecr([5, 10, 10, 11]));
console.log(incrDecr([10, 9, 8, 7]));
console.log(incrDecr([10, 8, 8, 4]));
console.log(incrDecr([18, 20, 16]));
console.log(incrDecr([4, 0, 6]));
