// 41_exceptions_intro.js

// Exceptions Introduction
// In this file, we will introduce the concept of exceptions in JavaScript.

// Exceptions:
// Exceptions are a way to handle errors or exceptional conditions in JavaScript programs.
// When an error occurs, an exception is thrown, and the program flow is interrupted.

// Example:
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // Throws an exception
  } catch (error) {
    console.log("An error occurred:", error.message); // Output: An error occurred: Division by zero is not allowed
  }
  
  // In the above example, the divide function checks if the divisor (b) is zero.
  // If it is zero, an exception is thrown with a custom error message.
  // The code inside the try block is executed, and if an exception is thrown, it is caught in the catch block.
  
  // Common Built-in Exceptions:
  // JavaScript provides several built-in exception types that can be thrown.
  
  // Example:
  try {
    throw new Error("Custom Error");
  } catch (error) {
    console.log("Caught an error:", error.message); // Output: Caught an error: Custom Error
  }
  
  // In the above example, we explicitly throw a custom Error object and catch it in the catch block.
  
  // Additional Concepts:
  
  // - Exceptions are used to handle errors or exceptional conditions in JavaScript programs.
  // - Exceptions are thrown using the throw statement and caught using try...catch blocks.
  // - JavaScript provides built-in exception types that can be thrown or caught.
  
  // That concludes our introduction to exceptions in JavaScript!
  // Stay tuned for the next file where we will continue exploring exceptions in more detail.
  
  