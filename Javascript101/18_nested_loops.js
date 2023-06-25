// 18_nested_loops.js

// In this file, we will cover nested loops in JavaScript.

// Key Differences with Java:
// 1. JavaScript supports nested loops in a similar way to Java.
// 2. JavaScript does not have a "goto" statement like Java.

// Nested For Loop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log("i:", i, "j:", j);
    }
  }
  
  // Output:
  // i: 1 j: 1
  // i: 1 j: 2
  // i: 1 j: 3
  // i: 2 j: 1
  // i: 2 j: 2
  // i: 2 j: 3
  // i: 3 j: 1
  // i: 3 j: 2
  // i: 3 j: 3
  
  // Nested While Loop:
  let outer = 1;
  
  while (outer <= 3) {
    let inner = 1;
  
    while (inner <= 3) {
      console.log("outer:", outer, "inner:", inner);
      inner++;
    }
  
    outer++;
  }
  
  // Output:
  // outer: 1 inner: 1
  // outer: 1 inner: 2
  // outer: 1 inner: 3
  // outer: 2 inner: 1
  // outer: 2 inner: 2
  // outer: 2 inner: 3
  // outer: 3 inner: 1
  // outer: 3 inner: 2
  // outer: 3 inner: 3
  
  // That concludes our coverage of nested loops in JavaScript!
  // Stay tuned for the next file where we will cover more concepts and techniques.
  
  