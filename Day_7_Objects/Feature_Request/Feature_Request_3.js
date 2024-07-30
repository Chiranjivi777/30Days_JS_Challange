// Object Iteration Script: 
//Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
};

// Using for...in loop to iterate over the object's properties
console.log("Using for...in loop:");
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Using Object.keys() to iterate over the object's properties
console.log("\nUsing Object.keys():");
Object.keys(book).forEach(key => {
    console.log(`${key}: ${book[key]}`);
});

// Using Object.values() to iterate over the object's values
console.log("\nUsing Object.values():");
Object.values(book).forEach(value => {
    console.log(value);
});

// Using Object.entries() to iterate over the object's key-value pairs
console.log("\nUsing Object.entries():");
Object.entries(book).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
