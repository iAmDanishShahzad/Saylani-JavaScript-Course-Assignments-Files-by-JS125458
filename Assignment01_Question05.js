// Submitted by: Danish Shahzad, 
// Roll Number: JS-125458

let totalMarks = +prompt("Please enter the total marks: ");
console.log("User entered the total marks as " + totalMarks);
let obtainedMarks = +prompt("Please enter the obtained marks: ");
console.log("User entered the obtained marks as " + obtainedMarks);

if (totalMarks < obtainedMarks) {
    console.log("Obtained marks cannot be greater than total marks!")
}
else {
    let percentageMarks = obtainedMarks / totalMarks * 100;

    if (percentageMarks < 60) {
        console.log("Percentage: " + percentageMarks + ", Grade: F");
    } else if (percentageMarks < 70) {
        console.log("Percentage: " + percentageMarks + ", Grade: D");
    } else if (percentageMarks < 80) {
        console.log("Percentage: " + percentageMarks + ", Grade: C");
    } else if (percentageMarks < 90) {
        console.log("Percentage: " + percentageMarks + ", Grade: B");
    } else if (percentageMarks <= 100) {
        console.log("Percentage: " + percentageMarks + ", Grade: A");
    } else {
        console.log("Out of range")
    }
}
