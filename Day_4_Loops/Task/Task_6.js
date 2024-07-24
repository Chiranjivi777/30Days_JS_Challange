//Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let number = 5; // You can change this to any number you want to calculate the factorial of
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= number);

console.log(`The factorial of ${number} is ${factorial}`);
