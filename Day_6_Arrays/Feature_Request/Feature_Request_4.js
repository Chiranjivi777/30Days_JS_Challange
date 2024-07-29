//Two-dimensional Array Script:
// Create a script that demonstrates the creation and manipulation of a two-dimensional array.

// Create a two-dimensional array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Log the entire matrix to the console
console.log("Initial matrix:");
console.log(matrix);

// Access and log a specific element (row 1, column 2)
console.log("Element at row 1, column 2:", matrix[1][2]);

// Modify an element (change the element at row 2, column 1 to 10)
matrix[2][1] = 10;
console.log("Matrix after modifying element at row 2, column 1:");
console.log(matrix);

// Add a new row to the matrix
let newRow = [10, 11, 12];
matrix.push(newRow);
console.log("Matrix after adding a new row:");
console.log(matrix);

// Remove the last row from the matrix
matrix.pop();
console.log("Matrix after removing the last row:");
console.log(matrix);

// Add a new column to each row
for (let i = 0; i < matrix.length; i++) {
    matrix[i].push(i + 10); // Adding a new element to each row
}
console.log("Matrix after adding a new column:");
console.log(matrix);

// Remove the last column from each row
for (let i = 0; i < matrix.length; i++) {
    matrix[i].pop(); // Removing the last element from each row
}
console.log("Matrix after removing the last column:");
console.log(matrix);

// Add a new element to the beginning of the first row
matrix[0].unshift(0);
console.log("Matrix after adding an element to the beginning of the first row:");
console.log(matrix);

// Remove the first element from the first row
matrix[0].shift();
console.log("Matrix after removing the first element from the first row:");
console.log(matrix);
