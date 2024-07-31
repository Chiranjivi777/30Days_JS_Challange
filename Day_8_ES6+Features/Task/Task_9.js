//Create an object with computed property names based on variables and log the object to the console.

// Variables to be used for computed property names
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

// Values for the properties
const value1 = 'John';
const value2 = 'Doe';
const value3 = 30;

// Create an object with computed property names
const person = {
    [propName1]: value1,
    [propName2]: value2,
    [propName3]: value3
};

// Log the object to the console
console.log(person);

// Output:
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// }
