// First JavaScript Programming

// In this file, we will write our first JavaScript program.

// Key Differences with Java:
// 1. JavaScript does not require a class or a main method like Java.
// 2. JavaScript code can be directly executed in the global scope.

// Let's start by printing a simple message to the console.

console.log("Welcome to JavaScript!");

// In JavaScript, we use the console.log() function to print output to the console.
// The message "Welcome to JavaScript!" will be displayed.

// Next, let's explore some basic programming concepts.

// Variables and Data Types:
// JavaScript variables are dynamically typed, meaning they can hold values of any type.

let name = "John"; // String variable
let age = 25; // Number variable
let isStudent = true; // Boolean variable

console.log(name, age, isStudent); // Printing the values of the variables

// We can assign different types of values to the same variable without specifying the type.

name = 42; // Assigning a number value to the 'name' variable

console.log(name); // Printing the updated value of the 'name' variable

// Operators:
// JavaScript supports various operators, including arithmetic, assignment, comparison, and logical operators.

let x = 10;
let y = 5;

let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
let modulus = x % y; // Modulus

console.log(sum, difference, product, quotient, modulus); // Printing the results

// Control Flow:
// JavaScript supports if-else statements for conditional execution.

let num = 7;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Looping:
// JavaScript supports various types of loops, such as 'for' and 'while' loops.

// Example: Printing numbers from 1 to 5 using a 'for' loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// This concludes our first JavaScript program.

// Stay tuned for the next file where we will explore more JavaScript concepts!
