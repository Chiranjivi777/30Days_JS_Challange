//Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.


// Existing array
const existingArray = [1, 2, 3];

// New elements to add
const additionalElements = [4, 5, 6];

// Create a new array using the spread operator
const newArray = [...existingArray, ...additionalElements];

// Log the new array to the console
console.log(newArray);
