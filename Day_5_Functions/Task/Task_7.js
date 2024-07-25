//• Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.


function multiply(a, b = 1) {
    return a * b;
}

// Example usage:
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7));    // Output: 7 (since b defaults to 1)
