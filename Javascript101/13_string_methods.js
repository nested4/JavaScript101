// 13_string.js

// In this file, we will explore string operations and manipulations in JavaScript.

// Key Differences with Java:
// 1. JavaScript strings are immutable, meaning they cannot be changed once created. Any operation that appears to modify a string
//    actually creates a new string.
// 2. JavaScript supports template literals, which provide a convenient way to concatenate strings and embed expressions.

// String Concatenation:
// JavaScript uses the + operator to concatenate strings.

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: "John Doe"

// Template Literals:
// JavaScript supports template literals enclosed in backticks (`) that allow for string interpolation and expression embedding.

let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log("Message:", message); // Output: "My name is John Doe and I am 30 years old."

// String Length:
// We can use the length property to get the length of a string.

let text = "Hello, World!";
let length = text.length;
console.log("Length:", length); // Output: 13

// Accessing Characters:
// We can access individual characters in a string using square brackets and zero-based indexing.

let firstCharacter = text[0];
console.log("First Character:", firstCharacter); // Output: "H"

let lastCharacter = text[text.length - 1];
console.log("Last Character:", lastCharacter); // Output: "!"

// String Methods:
// JavaScript provides various built-in string methods for manipulating and transforming strings.

let uppercaseText = text.toUpperCase();
console.log("Uppercase Text:", uppercaseText); // Output: "HELLO, WORLD!"

let lowercaseText = text.toLowerCase();
console.log("Lowercase Text:", lowercaseText); // Output: "hello, world!"

let subString = text.substring(7, 12);
console.log("Substring:", subString); // Output: "World"

let replacedText = text.replace("Hello", "Hi");
console.log("Replaced Text:", replacedText); // Output: "Hi, World!"

// That concludes our exploration of string operations in JavaScript!
// Stay tuned for the next file where we will continue exploring more concepts.

