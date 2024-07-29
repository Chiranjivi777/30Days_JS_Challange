//Array Manipulation Script: 
//Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

// Create an initial array
let array = [1, 2, 3, 4, 5];
console.log('Initial array:', array);

// Add elements to the end of the array using push
array.push(6);
array.push(7, 8);
console.log('After push:', array);

// Remove the last element from the array using pop
let poppedElement = array.pop();
console.log('After pop:', array);
console.log('Popped element:', poppedElement);

// Add elements to the beginning of the array using unshift
array.unshift(0);
array.unshift(-2, -1);
console.log('After unshift:', array);

// Remove the first element from the array using shift
let shiftedElement = array.shift();
console.log('After shift:', array);
console.log('Shifted element:', shiftedElement);
