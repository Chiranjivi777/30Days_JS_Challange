// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let num = 10;
let strNum = "10";

console.log(num == strNum); // true (loose equality, converts types)
console.log(num === strNum); // false (strict equality, different types)