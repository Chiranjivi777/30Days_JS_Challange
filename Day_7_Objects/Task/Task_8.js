//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
}

for (const n in book){
    console.log(`Property is: ${n} and value is: ${book[n]}`);
}