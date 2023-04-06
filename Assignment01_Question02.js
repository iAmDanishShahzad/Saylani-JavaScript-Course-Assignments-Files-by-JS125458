// Submitted by: Danish Shahzad, 
// Roll Number: JS-125458

let userNumber = +prompt("Enter the number to guess the sign: ");
console.log("User entered the number as " + userNumber);

if (userNumber >= 0) {
    console.log("The sign of number is: " + "+");
} else if (userNumber < 0) {
    console.log("The sign of number is: " + "-")
};
