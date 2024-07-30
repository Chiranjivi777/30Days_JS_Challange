//Access and log the name of the library and the titles of all the books in the library.

// Create a nested object representing a library
let library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};

// Log the name of the library
console.log("Library Name:", library.name);

// Log the titles of all the books in the library
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});
