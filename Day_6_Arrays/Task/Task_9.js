//Use the reduce method to calculate the sum of all numbers in the array and log the result.

// Example array
const array = [10, 15, 20, 25, 30, 35, 40];

// Use the reduce method to calculate the sum of all numbers in the array
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Log the result to the console
console.log('Sum of all numbers:', sum);
