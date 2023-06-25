// Primitive Type Castings and Arithmetic Operators

// In this file, we will explore primitive type castings and arithmetic operators in JavaScript.

// Key Differences with Java:
// 1. JavaScript is dynamically typed, meaning variables can hold values of any type without explicit type declarations.
//    Java, on the other hand, is statically typed and requires explicit type declarations for variables.
// 2. JavaScript has automatic type conversions, known as type coercion, whereas Java generally requires explicit type castings.
// 3. JavaScript introduces the "NaN" (Not-a-Number) value for certain arithmetic operations, while Java follows strict numeric operations.

// Type Castings:
// JavaScript performs automatic type conversions when necessary, which can lead to unexpected results.

let num1 = 10;
let num2 = "5";

let sum = num1 + num2; // JavaScript converts num1 to a string and performs string concatenation.
console.log("Sum:", sum); // Output: "105"

// To achieve numeric addition, we can use the parseInt() function to convert the string to a number.

let num3 = parseInt(num2);
let total = num1 + num3;
console.log("Total:", total); // Output: 15

// Arithmetic Operators:
// JavaScript supports common arithmetic operators: +, -, *, /, % (remainder), and ** (exponentiation).

let a = 5;
let b = 2;

let addition = a + b;
console.log("Addition:", addition); // Output: 7

let subtraction = a - b;
console.log("Subtraction:", subtraction); // Output: 3

let multiplication = a * b;
console.log("Multiplication:", multiplication); // Output: 10

let division = a / b;
console.log("Division:", division); // Output: 2.5

let remainder = a % b;
console.log("Remainder:", remainder); // Output: 1

let exponentiation = a ** b;
console.log("Exponentiation:", exponentiation); // Output: 25

// Order of Operations:
// JavaScript follows the same order of operations as Java and most programming languages.
// Use parentheses to specify the desired evaluation order.

let result = (a + b) * (a - b);
console.log("Result:", result); // Output: 21

// That concludes our exploration of primitive type castings and arithmetic operators in JavaScript!
// Stay tuned for the next file where we will cover more concepts and operators.
// Implicit and Explicit Type Casting

// In Java, explicit casting (type casting) is used to convert between different data types.
// This is done explicitly by the programmer using the cast operator.
// Java requires explicit casting for certain conversions, especially when converting from
// a larger data type to a smaller data type or between incompatible data types.

// Example in Java:
let myDouble = 3.14;
let myInt = Math.floor(myDouble); // Explicit casting from double to int

// In JavaScript, there is no explicit casting like in Java.
// JavaScript is a dynamically typed language, and variables are not explicitly declared with a specific data type.
// JavaScript performs implicit casting (type coercion) automatically behind the scenes.
// It tries to convert values between different types when necessary, without requiring explicit casting from the programmer.

// Example in JavaScript:
let myNumber = 10;
let myString = "5";
let sum2 = myNumber + myString; // JavaScript performs implicit casting
console.log(sum2); // Output: "105"

// JavaScript automatically converts the `myNumber` value to a string and performs string concatenation instead of numerical addition.

// The key difference between Java and JavaScript in terms of casting is that Java requires explicit casting,
// where the programmer explicitly specifies the conversion, while JavaScript handles most of the casting implicitly
// during variable declaration and operations.

// Keep in mind that JavaScript's implicit casting can sometimes lead to unexpected behavior,
// so it's important to understand the type coercion rules in JavaScript.

// In subsequent examples, we will focus on JavaScript's implicit casting behavior.

// Feel free to experiment with different examples and explore the implicit casting behavior in JavaScript.

