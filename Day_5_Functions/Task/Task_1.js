//Activity 1: Function Declaration

//• Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`The number ${number} is even.`);
    } else {
        console.log(`The number ${number} is odd.`);
    }
}

// Example usage:
checkEvenOrOdd(10); // The number 10 is even.
checkEvenOrOdd(7);  // The number 7 is odd.
