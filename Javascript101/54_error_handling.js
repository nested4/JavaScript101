// File: 54_error_handling.js
// Description: Error Handling in JavaScript

// Error handling is an important aspect of writing robust code. JavaScript provides various mechanisms for handling errors.

// In JavaScript, error handling can be done using the try-catch-finally block, similar to Java.

// 1. try-catch Block
try {
    // Code that might throw an error
  } catch (error) {
    // Code to handle the error
  }
  
  // The try block contains the code that might throw an error. If an error occurs, it is caught in the catch block, where you can handle the error. The 'error' parameter in the catch block holds the error object.
  
  // Example:
  try {
    let result = 10 / 0; // Division by zero will throw an error
    console.log(result);
  } catch (error) {
    console.log("An error occurred:", error);
  }
  
  // 2. throw Statement
  function validateNumber(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid number"); // Throw a custom error
    }
  }
  
  // The throw statement allows you to throw custom errors. It creates a new error object and halts the execution of the current function. The error message can be customized to provide specific information about the error.
  
  try {
    validateNumber("abc"); // This will throw an error
  } catch (error) {
    console.log("An error occurred:", error);
  }
  
  // 3. finally Block
  try {
    // Code that might throw an error
  } catch (error) {
    // Code to handle the error
  } finally {
    // Code that will always execute, regardless of whether an error occurred or not
  }
  
  // The finally block is optional and is used to specify code that will always execute, regardless of whether an error occurred or not. It is commonly used for cleanup tasks or releasing resources.
  
  // Example:
  try {
    let result = 10 / 0; // Division by zero will throw an error
    console.log(result);
  } catch (error) {
    console.log("An error occurred:", error);
  } finally {
    console.log("Finally block executed");
  }
  
  // Compared to Java, JavaScript error handling follows a similar pattern with the try-catch-finally block. However, there are some differences to note:
  
  // - JavaScript allows catching and handling different types of errors using multiple catch blocks or conditional statements within a single catch block, whereas Java requires separate catch blocks for each specific exception type.
  // - JavaScript uses the 'throw' statement to manually throw custom errors, whereas Java has specific exception classes that can be thrown.
  // - JavaScript's error objects are instances of the 'Error' class, which can be customized with custom error messages. Java, on the other hand, uses a hierarchical exception class structure.
  // - JavaScript's finally block always executes, regardless of whether an error occurred or not. In Java, the finally block is also executed in most cases, but there are a few exceptions, such as a system exit or an uncaught exception in the catch block.
  
  // These differences should be considered when working with error handling in JavaScript compared to Java.
  
  // Please let me know if you have any further questions or if there's anything else you'd like me to cover in the code files.