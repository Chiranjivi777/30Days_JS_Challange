//Access and log the title and author properties of the book object.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Access and log the title and author properties
console.log("Title:", book.title);
console.log("Author:", book.author);


console.log("Title:",book["title"]);
console.log("Author:",book["author"]);