//Write a script that uses enhanced object literals to create and log an object with methods and computed property names.


const propName = 'dynamicProp';

const myObject = {
  // Computed property name
  [propName]: 'This is a dynamic property',

  // Method definition
  greet() {
    console.log('Hello, world!');
  },

  // Another method using shorthand syntax
  sayGoodbye() {
    console.log('Goodbye, world!');
  }
};

// Log the object
console.log(myObject);

// Call the methods
myObject.greet();
myObject.sayGoodbye();
