//9. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
function Sunday() {
  for (var year = 2014; year <= 2050; year++) {
    var day1 = new Date(year, 0, 1);
    if (day1.getDay() === 0) {
      console.log("The 1st day as a sunday is in " + year);
    }
  }
}
console.log(Sunday());
