//Pattern Printing Script: 
//Write a script that prints a pattern of stars using nested loops.



let i = 1; // Initialize the outer loop counter

// Outer loop for each row
while (i <= 5) {
    let row = '';  // Initialize an empty string for each row
    let j = 1;  // Initialize the inner loop counter

    // Inner loop for each column in the current row
    while (j <= i) {
        row += '*'; // Append a '*' to the row string
        j++; // Increment the inner loop counter
    }

    console.log(row); // Print the current row
    i++; // Increment the outer loop counter
}
