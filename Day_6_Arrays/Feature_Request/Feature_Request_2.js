//Array Transformation Script: 
//Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Use map to create a new array where each number is doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);

// 2. Use filter to create a new array with only even numbers
const evenNumbers = doubledNumbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// 3. Use reduce to sum up all the even numbers
const sumOfEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of Even Numbers:', sumOfEvenNumbers);
