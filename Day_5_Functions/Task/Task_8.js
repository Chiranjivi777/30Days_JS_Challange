//• Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
console.log(greet("Alice"));
console.log(greet("Bob", 25));
