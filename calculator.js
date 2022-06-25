let firstNumber =prompt("Input First Number")
let operator =prompt("choose an operator (+, -, *, /)")
let secondNumber =prompt("Input Second Number")
let answer =`${firstNumber} ${operator} ${secondNumber}`
alert("Your answer is: " + eval(answer))