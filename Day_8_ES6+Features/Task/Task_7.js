//Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter


// Function to return the product of two numbers, with the second parameter having a default value of 1
function multiply(a, b = 1) {
    return a * b;
}

// Example usage
const result1 = multiply(5, 3); // Calling with both parameters
console.log('Product with both parameters:', result1); // Output: Product with both parameters: 15

const result2 = multiply(5); // Calling with only the first parameter
console.log('Product with default second parameter:', result2); // Output: Product with default second parameter: 5
