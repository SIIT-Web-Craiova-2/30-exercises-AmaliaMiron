//94. Write a JavaScript program to find the number which appears most in a given array of integers.
function numbers(nums) {
  var max = 0;
  var num = 0;
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j <= nums.length; j++) {
      if (nums[i] == nums[j]) {
        num += 1;
      }
    }
    if (num > max) {
      result = nums[i];
      max = num;
    }
    num = 0;
  }
  return result;
}
console.log(numbers([3, 4, 3, 4, 4, 3, 4, 5]));
console.log(numbers([1, 2, 3, 2, 2, 8, 1, 9]));
