//Use the filter method to create a new array with only even numbers and log the new array.


// Example array
const array = [10, 15, 20, 25, 30, 35, 40];

// Use the filter method to create a new array with only even numbers
const evenNumbers = array.filter(number => number % 2 === 0);

// Log the new array to the console
console.log('Even numbers:', evenNumbers);
