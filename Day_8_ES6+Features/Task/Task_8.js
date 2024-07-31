//Use enhanced object literals to create an object with methods and properties, and log the object to the console. 



// Define an object using enhanced object literals
const person = {
    // Property shorthand
    name: 'John Doe',
    age: 30,

    // Method shorthand
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },

    // Computed property name
    ['favorite' + 'Color']: 'blue',

    // Method using computed property name
    ['say' + 'Goodbye']() {
        console.log('Goodbye!');
    }
};

// Log the object to the console
console.log(person);

// Call the methods
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
person.sayGoodbye(); // Output: Goodbye!
