//Activity 5: Ternary Operator

/*In JavaScript, the ternary operator is a concise way to write conditional statements. It consists of three parts: a condition followed by a question mark `?`, an expression to execute if the condition is true, and a colon `:` followed by an expression to execute if the condition is false. 

Here's a simple example to illustrate the ternary operator:

```javascript
let age = 20;
let message = (age >= 18) ? 'You are an adult' : 'You are a minor';
console.log(message);
```

In this example, if the `age` is greater than or equal to 18, the message `'You are an adult'` will be assigned to the `message` variable; otherwise, `'You are a minor'` will be assigned. This allows for compact and readable conditional expressions in JavaScript.

*/

//• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num = -20;
let message = (num >= 0) ? 'Number is postive' : 'Number is negative';
console.log(message);