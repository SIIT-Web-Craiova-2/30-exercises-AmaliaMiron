//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function multiply() {
  number1 = document.getElementById("1stNumber").value;
  number2 = document.getElementById("2ndNumber").value;
  result = document.getElementById("result").innerHTML = number1 * number2;
}

function divide() {
  number1 = document.getElementById("1stNumber").value;
  number2 = document.getElementById("2ndNumber").value;
  result = document.getElementById("result").innerHTML = number1 / number2;
}
