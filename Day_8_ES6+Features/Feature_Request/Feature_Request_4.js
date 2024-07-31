//Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

// Function to return a greeting message, with default values for name and greeting
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// Example usage
const result1 = greet('Alice', 'Hi'); // Calling with both parameters
console.log('Greeting with both parameters:', result1); // Output: Greeting with both parameters: Hi, Alice!

const result2 = greet('Bob'); // Calling with only the first parameter
console.log('Greeting with default greeting:', result2); // Output: Greeting with default greeting: Hello, Bob!

const result3 = greet(); // Calling with no parameters
console.log('Greeting with default parameters:', result3); // Output: Greeting with default parameters: Hello, Guest!
