// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. 

// Function to sum an arbitrary number of arguments
function sum(...args){
    let sum = 0;

    for (const n of args){
        sum +=n;
    }
    return sum;
}

// Example usage

console.log(sum(2,3,1,5,7));