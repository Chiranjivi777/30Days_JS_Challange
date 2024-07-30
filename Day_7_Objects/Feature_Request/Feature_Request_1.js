//Book Object Script: 
//Write a script that creates a book object, adds methods to it, and logs its properties and method results.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    // Method to update the year of the book
    updateYear: function(newYear) {
        this.year = newYear;
    },

    // Method to get a summary of the book
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};

// Log the initial book object to the console
console.log("Initial Book object:");
console.log(book);

// Update the year of the book
book.updateYear(2023);

// Log the updated book object to the console
console.log("Updated Book object:");
console.log(book);

// Log the summary of the book to the console
console.log("Book Summary:");
console.log(book.getSummary());
