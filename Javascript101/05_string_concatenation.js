// String Concatenation

// In this file, we will explore string concatenation in JavaScript.

// Key Differences with Java:
// 1. JavaScript uses the "+" operator for string concatenation, whereas Java uses the "+" operator as well.
// 2. JavaScript also supports string interpolation using template literals (`${}`), which is not available in Java.

// String Concatenation with the "+" Operator:
// In JavaScript, we can concatenate strings using the "+" operator.

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

let greeting = "Hello";
let message = greeting + ", " + fullName;
console.log("Message:", message);

// String Interpolation (Template Literals):
// JavaScript introduces template literals, denoted by backticks (`), for easy string interpolation.

let product = "Apple";
let quantity = 10;
let price = 2.5;

let orderSummary = `Product: ${product}
Quantity: ${quantity}
Price: $${price}
Total: $${quantity * price}`;

console.log("Order Summary:");
console.log(orderSummary);

// Concatenating Strings with Other Data Types:
// JavaScript automatically converts other data types to strings when using the "+" operator.

let number = 5;
let result = "The number is: " + number;
console.log(result);

let booleanValue = true;
let output = "The boolean value is: " + booleanValue;
console.log(output);

// Note: When concatenating a string with a number using the "+" operator, the number is converted to a string.
// However, if the number is used in a mathematical operation, JavaScript will treat it as a number.

let num1 = 10;
let num2 = 20;
let sum = num1 + num2; // The numbers are added, not concatenated.
console.log("Sum:", sum);

// That's all about string concatenation in JavaScript!
// Stay tuned for the next file where we will cover more fundamental concepts and operators.
