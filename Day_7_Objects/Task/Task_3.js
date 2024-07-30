//Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    
    // Add a method to return a string with the book's title and author
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};

// Call the method and log the result
console.log(book.getDetails());
