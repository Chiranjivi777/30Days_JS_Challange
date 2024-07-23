//. Leap Year Check Script:
// Write a script that checks if a year is a leap year using multiple conditions and logs the result.


let year = 2024; // You can change this value to test different years

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }
    } else {
        console.log(year + " is a leap year.");
    }
} else {
    console.log(year + " is not a leap year.");
}
