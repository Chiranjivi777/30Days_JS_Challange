//Use object destructuring to extract the title and author from a book object and log them to the console.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Use object destructuring to extract title and author
let { title, author } = book;

// Log the title and author to the console
console.log("Title:", title);
console.log("Author:", author);
