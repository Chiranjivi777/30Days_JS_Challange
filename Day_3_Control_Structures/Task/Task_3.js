//Activity 2: Nested If-Else Statements

//• Task 3: Write a program to find the largest of three numbers using nested if-else statements.


let num1 = 5
let num2 = 55
let num3 = 25

let largest

if(num1 >num2){
    if(num1 >num3){
        largest = num1
    }else{
        largest = num3
    }
}else{
    if (num2 > num3){
        largest=num2
    } else{
        largest = num3
    }
}

console.log("The largest number is " + largest)