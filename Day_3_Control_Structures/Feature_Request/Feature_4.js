//Grade Assignment Script:

// Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let score = 85; // You can change this value to test different scores
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(`The grade for a score of ${score} is ${grade}.`);
