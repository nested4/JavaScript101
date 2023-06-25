// Nested If Statements and Ternary Operator

// In this file, we will explore nested if statements and the ternary operator in JavaScript.

// Nested If Statements:
// JavaScript allows you to nest if statements within other if statements to create more complex conditions.

let num = 10;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even");
  } else {
    console.log("The number is positive but odd");
  }
} else {
  console.log("The number is non-positive");
}

// Ternary Operator:
// The ternary operator provides a concise way to write conditional statements in a single line.

let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";

console.log("Is the person an adult?", isAdult);

// The ternary operator consists of a condition, followed by a question mark (?),
// the expression to be executed if the condition is true, followed by a colon (:),
// and the expression to be executed if the condition is false.

// That concludes our exploration of nested if statements and the ternary operator in JavaScript!
// Stay tuned for the next file where we will cover more concepts and operators.

