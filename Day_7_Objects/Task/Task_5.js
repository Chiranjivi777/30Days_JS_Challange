// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.


// Create a nested object representing a library
let library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}`;
            }
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            getDetails: function() {
                return `Title: ${this.title}, Author: ${this.author}`;
            }
        }
    ],
    getLibraryDetails: function() {
        return `Library: ${this.name}, Address: ${this.address}`;
    }
};

// Log the library object to the console
console.log(library);




