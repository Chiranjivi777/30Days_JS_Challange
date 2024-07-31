//Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

// Using the spread operator to combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log('Combined Array:', combinedArray); // Output: Combined Array: [1, 2, 3, 4, 5, 6]

// Using the rest operator to handle multiple function arguments
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const sum = sumAll(1, 2, 3, 4, 5, 6);

console.log('Sum of all numbers:', sum); // Output: Sum of all numbers: 21
