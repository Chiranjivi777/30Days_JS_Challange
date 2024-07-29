//Array Iteration Script:
// Write a script that iterates over an array using both for loop and forEach method and logs each element.

// Example array
const array = [10, 20, 30, 40, 50];

// Using a for loop to iterate over the array
console.log('Using for loop:');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using the forEach method to iterate over the array
console.log('Using forEach method:');
array.forEach(element => {
  console.log(element);
});

