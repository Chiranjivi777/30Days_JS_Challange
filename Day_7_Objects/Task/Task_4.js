// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// Create an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    
   
    // Add a method to update the year property
    updateYear: function(newYear) {
        this.year = newYear;
    }
};

// Call the method to update the year and log the updated object
book.updateYear(2024);
console.log(book);
