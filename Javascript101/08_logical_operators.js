// Logical Operators and Single If Statement

// In this file, we will explore logical operators and the single if statement in JavaScript.

// Logical Operators:
// JavaScript provides logical operators to perform logical operations on boolean values.
// The logical operators are: && (AND), || (OR), and ! (NOT).

let x = 5;
let y = 10;

// AND operator (&&): Returns true if both operands are true.
if (x > 0 && y > 0) {
  console.log("Both x and y are greater than 0");
} else {
  console.log("At least one of x and y is not greater than 0");
}

// OR operator (||): Returns true if at least one of the operands is true.
if (x > 0 || y > 0) {
  console.log("At least one of x and y is greater than 0");
} else {
  console.log("Both x and y are not greater than 0");
}

// NOT operator (!): Returns the opposite boolean value of the operand.
let isPositive = true;
let isNegative = !isPositive;
console.log("Negation of isPositive:", isNegative); // Output: false

// Single If Statement:
// JavaScript allows using a single if statement without an else clause.

let number = 7;

if (number % 2 === 0) {
  console.log("The number is even");
}

console.log("This statement always gets executed");

// The code block within the if statement will only execute if the condition is true.
// If the condition is false, the code block is skipped.

// That concludes our exploration of logical operators and the single if statement in JavaScript!
// Stay tuned for the next file where we will cover more concepts and operators.

