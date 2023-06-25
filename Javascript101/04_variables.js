// Variables: Primitive, String

// In this file, we will explore variables in JavaScript.

// Key Differences with Java:
// 1. JavaScript has dynamic typing, whereas Java has static typing.
// 2. JavaScript uses the "var", "let", and "const" keywords for variable declaration, while Java uses "int", "boolean", etc.

// Variable Declaration in JavaScript:
// In JavaScript, we can declare variables using the "var", "let", or "const" keywords.

// "var" keyword (Function scope):
// Variables declared with "var" have function scope.
// They are globally scoped if declared outside any function.
// "var" variables can be re-declared and updated within their scope.

var number1 = 10;
var number2 = 20;
var sum = number1 + number2;

console.log("Sum:", sum);

// "let" keyword (Block scope):
// Variables declared with "let" have block scope.
// They are scoped to the nearest enclosing block, which could be a function, loop, or any block of code wrapped within curly braces.
// "let" variables can be updated within their scope, but cannot be re-declared within the same block.

let name = "John";
let age = 25;

console.log("Name:", name);
console.log("Age:", age);

// "const" keyword (Block scope, read-only):
// Variables declared with "const" also have block scope.
// They are read-only and cannot be reassigned once they are initialized.
// However, for complex data types like objects and arrays, the properties and elements can be modified.

const pi = 3.1416;
// pi = 3.14; // Error: Cannot assign a new value to a constant variable

console.log("PI:", pi);

// String Variables:
// In JavaScript, we can declare string variables using the same keywords as other primitive types.

var message = "Hello, World!";
console.log("Message:", message);

let greeting = "Welcome";
console.log("Greeting:", greeting);

const companyName = "ABC Corp";
console.log("Company Name:", companyName);

// Concatenating Strings:
// In JavaScript, we can concatenate strings using the "+" operator.

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

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

// That's all about variables and string variables in JavaScript!
// Stay tuned for the next file where we will cover string concatenation and more string-related concepts.
