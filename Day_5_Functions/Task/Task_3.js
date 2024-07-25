// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(a, b) {
    const max = (a > b) ? a : b;
    console.log("The maximum of", a, "and", b, "is", max);
    return max;
};

// Example usage:
findMax(5, 10); // Logs: The maximum of 5 and 10 is 10
findMax(20, 15); // Logs: The maximum of 20 and 15 is 20
