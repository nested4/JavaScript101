// Operators: Unary, Shorthand, Relational

// In this file, we will explore unary operators, shorthand operators, and relational operators in JavaScript.

// Unary Operators:
// JavaScript supports various unary operators, including increment (++), decrement (--), negation (-), and logical negation (!).

let x = 5;
console.log("Initial value of x:", x); // Output: 5

x++;
console.log("After incrementing x:", x); // Output: 6

x--;
console.log("After decrementing x:", x); // Output: 5

let y = -x;
console.log("Negation of x:", y); // Output: -5

let isTrue = true;
let isFalse = !isTrue;
console.log("Logical negation:", isFalse); // Output: false

// Shorthand Operators:
// JavaScript provides shorthand operators for concise assignment and arithmetic operations.

let a = 5;
a += 2; // Equivalent to: a = a + 2;
console.log("After shorthand addition:", a); // Output: 7

let b = 10;
b *= 3; // Equivalent to: b = b * 3;
console.log("After shorthand multiplication:", b); // Output: 30

// Relational Operators:
// JavaScript supports relational operators to compare values. The result is a boolean value (true or false).

let num1 = 5;
let num2 = 10;

let isEqual = num1 === num2; // Strict equality comparison
console.log("Equality check:", isEqual); // Output: false

let isNotEqual = num1 !== num2; // Strict inequality comparison
console.log("Inequality check:", isNotEqual); // Output: true

let isGreater = num1 > num2; // Greater than comparison
console.log("Greater than check:", isGreater); // Output: false

let isLess = num1 < num2; // Less than comparison
console.log("Less than check:", isLess); // Output: true

// That concludes our exploration of unary operators, shorthand operators, and relational operators in JavaScript!
// Stay tuned for the next file where we will cover more concepts and operators.

