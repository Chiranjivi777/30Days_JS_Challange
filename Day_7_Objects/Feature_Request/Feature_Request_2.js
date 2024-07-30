//Library Object Script: 
//Create a script that defines a library object containing an array of book objects and logs the library's details.


// Define the library object
let library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
            }
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
            }
        }
    ],
    getLibraryDetails: function() {
        return `Library: ${this.name}, Address: ${this.address}`;
    }
};

// Log the library's details
console.log(library.getLibraryDetails());

// Log details of each book in the library
library.books.forEach(book => {
    console.log(book.getDetails());
});
