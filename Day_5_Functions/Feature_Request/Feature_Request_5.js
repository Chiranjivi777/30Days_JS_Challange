//Higher-Order Function Script: 

//Write a script that includes a higher-order function to apply a given function multiple times.

function repeatFunction(fn, times) {
    return function() {
        for (let i = 0; i < times; i++) {
            fn();
        }
    };
}

// Example usage:
const sayHello = () => console.log("Hello!");

const sayHelloFiveTimes = repeatFunction(sayHello, 5);

sayHelloFiveTimes();
// Output:
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
