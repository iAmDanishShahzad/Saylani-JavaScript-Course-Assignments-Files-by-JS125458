// Submitted by: Danish Shahzad, 
// Roll Number: JS-125458

let firstNumber = prompt("Enter the first number: ");
console.log("User entered the first number as " + firstNumber);
let secondNumber = prompt("Enter the second number: ");
console.log("User entered the second number as " + secondNumber);

if (firstNumber > secondNumber) {
    console.log("The larger number is " + firstNumber);
} else if (secondNumber > firstNumber) {
    console.log("The larger number is " + secondNumber)
} else {
    console.log("Both the numbers are equal")
};
