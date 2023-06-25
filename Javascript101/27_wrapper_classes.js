// 27_wrapper_classes.js

// Wrapper Classes
// In this file, we will explore the concept of wrapper classes in JavaScript.

// Key Differences with Java:
// 1. Unlike Java, JavaScript does not have dedicated wrapper classes for primitive types.
// 2. In JavaScript, primitive values are automatically converted to their corresponding wrapper objects when necessary.
//    This process is known as "boxing" or "autoboxing".
// 3. JavaScript provides built-in properties and methods on wrapper objects to perform operations on primitive values.

// Wrapper Class Examples:

// Example 1: String Wrapper Class
let str = "Hello, World!";
console.log(str.length); // Output: 13

let uppercaseStr = str.toUpperCase();
console.log(uppercaseStr); // Output: "HELLO, WORLD!"

// Example 2: Number Wrapper Class
let num = 10;
console.log(num.toFixed(2)); // Output: "10.00"

let squareRoot = Math.sqrt(num);
console.log(squareRoot); // Output: 3.1622776601683795

// Example 3: Boolean Wrapper Class
let bool = true;
console.log(bool.toString()); // Output: "true"

let negatedBool = !bool;
console.log(negatedBool); // Output: false

// Wrapper classes in JavaScript allow us to perform operations and access properties on primitive values.
// JavaScript automatically converts primitives to wrapper objects and back when needed.

// That concludes our exploration of wrapper classes in JavaScript!
// Stay tuned for the next file where we will cover more concepts and topics.

