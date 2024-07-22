// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Using let for reassignment
let letVar = "Initial Value";
console.log("Initial letVar:", letVar);

letVar = "Updated Value";
console.log("Updated letVar:", letVar);

// Using const for reassignment
const constVar = "Initial Value";
console.log("Initial constVar:", constVar);

// Uncommenting the line below will result in an error
 //constVar = "Updated Value";

