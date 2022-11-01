//9. Write a JavaScript program to calculate days left until next Christmas.
var Christmas, today, bday, diff, days;
var Christmas = [25, 12]; // 25th of December
var today = new Date();
var Christmasdays = new Date(
  today.getFullYear(),
  Christmas[1] - 1,
  Christmas[0]
);
if (today.getTime() > Christmasdays.getTime()) {
  Christmasdays.setFullYear(Christmasdays.getFullYear() + 1);
}
diff = Christmasdays.getTime() - today.getTime();
days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " days until Christmas");
