
// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result


function composeFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Example usage:
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;

const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result); // Output: 21
