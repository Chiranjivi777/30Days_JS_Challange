//Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

// Variables to be embedded in the template literals
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const occupation = 'Software Developer';

// Using template literals to create a string with embedded variables
const introduction = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I work as a ${occupation}.`;

// Logging the string with embedded variables
console.log(introduction);

// Using template literals to create a multi-line string
const multiLineString = `
This is a multi-line string.
It can span multiple lines without needing concatenation.
You can include variables like ${firstName} ${lastName} directly within the string.
`;

// Logging the multi-line string
console.log(multiLineString);

// Output:
// Hello, my name is John Doe. I am 30 years old and I work as a Software Developer.
// 
// This is a multi-line string.
// It can span multiple lines without needing concatenation.
// You can include variables like John Doe directly within the string.
