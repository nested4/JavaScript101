// 12_scanner_intro.js

// In this file, we will cover the introduction to user input using the prompt() function in JavaScript.

// Key Differences with Java:
// In Java, we use the Scanner class to read user input from the console. In JavaScript, we can use the prompt() function
// to display a dialog box that allows the user to enter input.

// Prompting the User for Input:
// The prompt() function displays a dialog box with an optional message and an input field for the user to enter data.
// The function returns the value entered by the user as a string.

let name = prompt("Enter your name:");
console.log("Hello, " + name + "!");

// Example: Calculating the Sum of Two Numbers
// Let's prompt the user to enter two numbers and calculate their sum.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Handling User Input:
// It's important to validate and handle user input appropriately. In JavaScript, we can use various functions
// like parseInt() or parseFloat() to convert the input string to a numeric value if needed.

// Note: The prompt() function is a basic way to get user input in JavaScript. For more advanced input handling,
// you can explore HTML forms or libraries/frameworks like React or Angular.

// That concludes our introduction to user input using the prompt() function in JavaScript.
// Stay tuned for the next file where we will
