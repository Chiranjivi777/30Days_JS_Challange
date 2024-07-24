/* 
Activity 4: Nested Loop
Task 7: Write a program to print a pattern using nested for loops:
(ignore color)

*
**
***
****
***** 

*/

// Outer loop for each row

for (let i = 1; i <= 5; i++) {  
    let row = ''; // Initialize an empty string for each row

    // Inner loop for each column in the current row

    for (let j = 1; j <= i; j++) {  
        row += '*'; // Append a '*' to the row string
    }

    console.log(row); // Print the current row
}
