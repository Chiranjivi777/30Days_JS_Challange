// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    
   
    // Method to return a string with the book's title and year
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

// Log the result of calling the getTitleAndYear method
console.log(book.getTitleAndYear());
