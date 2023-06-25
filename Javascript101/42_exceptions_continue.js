// 42_exceptions_continue.js

// Exceptions Continued
// In this file, we will continue our exploration of exceptions in JavaScript.

// Raising Exceptions:
// In addition to using the throw statement to explicitly throw exceptions, JavaScript also raises exceptions implicitly in certain situations.

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
  
  // In the above example, the divide function throws an exception explicitly when the divisor is zero.
  // However, JavaScript also raises exceptions implicitly for certain scenarios, such as accessing undefined variables or calling undefined functions.
  
  // Example:
  try {
    console.log(undefinedVariable); // Throws a ReferenceError
  } catch (error) {
    console.log("Caught an error:", error.message); // Output: Caught an error: undefinedVariable is not defined
  }
  
  // In the above example, we try to access an undefined variable, which raises a ReferenceError that is caught in the catch block.
  
  // Exception Propagation:
  // When an exception is thrown inside a function, it can propagate up the call stack until it is caught by an appropriate catch block.
  
  // Example:
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  function performDivision() {
    try {
      console.log(divide(10, 0));
    } catch (error) {
      console.log("Caught an error:", error.message); // Output: Caught an error: Division by zero is not allowed
    }
  }
  
  performDivision();
  
  // In the above example, the divide function throws an exception when the divisor is zero.
  // This exception propagates up the call stack until it is caught by the catch block in the performDivision function.
  
  // Additional Concepts:
  
  // - JavaScript can raise exceptions implicitly in certain scenarios, such as accessing undefined variables or calling undefined functions.
  // - Exceptions can propagate up the call stack until they are caught by an appropriate catch block.
  
  // That concludes our exploration of exceptions in JavaScript!
  // Stay tuned for the next file where we will dive deeper into exception handling techniques and best practices.
  
  