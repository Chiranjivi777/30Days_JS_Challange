//Create a script that uses array and object destructuring to extract values and log them.

// Example array of numbers
const numbers = [10, 20, 30, 40, 50];

// Destructuring the first and second elements from the array
const [first, second] = numbers;

// Logging the extracted elements to the console
console.log('First element:', first); // Output: First element: 10
console.log('Second element:', second); // Output: Second element: 20

// Example object
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    }
};

// Destructuring the properties from the object
const { name, age, address: { city, zip } } = person;

// Logging the extracted properties to the console
console.log('Name:', name); // Output: Name: John Doe
console.log('Age:', age); // Output: Age: 30
console.log('City:', city); // Output: City: New York
console.log('ZIP Code:', zip); // Output: ZIP Code: 10001
