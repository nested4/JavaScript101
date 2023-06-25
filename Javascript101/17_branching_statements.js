// 17_branching_statements_while_do_while_loops.js

// In this file, we will cover branching statements and while-do/while loops in JavaScript.

// Key Differences with Java:
// 1. JavaScript has similar branching statements to Java: if, else if, else, and switch.
// 2. JavaScript does not have a "goto" statement like Java.

// If Statement:
let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Output: Number is positive

// While Loop:
let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// Do-While Loop:
let i = 1;

do {
  console.log("Value of i:", i);
  i++;
} while (i <= 5);

// Output:
// Value of i: 1
// Value of i: 2
// Value of i: 3
// Value of i: 4
// Value of i: 5

// Break Statement:
let j = 1;

while (j <= 10) {
  if (j === 5) {
    break;
  }
  console.log("Value of j:", j);
  j++;
}

// Output:
// Value of j: 1
// Value of j: 2
// Value of j: 3
// Value of j: 4

// Continue Statement:
for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    continue;
  }
  console.log("Value of k:", k);
}

// Output:
// Value of k: 1
// Value of k: 2
// Value of k: 4
// Value of k: 5

// That concludes our coverage of branching statements and while-do/while loops in JavaScript!
// Stay tuned for the next file where we will cover more concepts and techniques.

