// Error Handling

// Error handling is an essential aspect of JavaScript programming to gracefully handle and manage errors that may occur during the execution of code.
// In this file, we will explore different error handling techniques in JavaScript.

// try/catch Statement
// The try/catch statement allows us to handle exceptions (errors) that may occur within a block of code.

// Example:
try {
    // Code that may throw an error
    throw new Error('Something went wrong');
  } catch (error) {
    // Code to handle the error
    console.log('Error:', error.message);
  }
  
  // In the try block, we place the code that may potentially throw an error.
  // If an error occurs within the try block, it is caught by the catch block.
  // The catch block contains the code to handle the error, which can include logging the error message or performing any necessary actions.
  
  // Error Objects
  // JavaScript provides built-in Error objects, such as Error, SyntaxError, TypeError, etc., that can be thrown or caught.
  
  // Example:
  try {
    throw new SyntaxError('Invalid syntax');
  } catch (error) {
    console.log('Error:', error.name); // SyntaxError
    console.log('Message:', error.message); // Invalid syntax
  }
  
  // Custom Errors
  // We can also create custom error objects by extending the built-in Error object or creating a new error object.
  
  // Example:
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  try {
    throw new CustomError('Custom error message');
  } catch (error) {
    console.log('Error:', error.name); // CustomError
    console.log('Message:', error.message); // Custom error message
  }
  
  // Error Propagation
  // When handling errors, it's important to consider error propagation, which involves propagating the error to higher-level code or passing it to the caller for further handling.
  
  // Example:
  function processFile() {
    try {
      // Code that may throw an error while processing a file
      throw new Error('Error processing file');
    } catch (error) {
      console.log('Error:', error.message);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
  
  try {
    processFile();
  } catch (error) {
    console.log('Error caught by caller:', error.message);
  }
  
  // In the example above, the processFile function throws an error while processing a file. The catch block within the function logs the error and rethrows it to propagate it to the caller. The caller then catches the error and performs further handling if needed.
  
  // Finally Block
  // The finally block is optional and is executed regardless of whether an exception occurs or not.
  
  // Example:
  try {
    // Code that may throw an error
    console.log('Inside try block');
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('Inside finally block');
  }
  
  // The code inside the finally block is executed after the try block and catch block, regardless of whether an exception occurred or not.
  
  // Error handling is a critical part of writing robust and reliable JavaScript code. By effectively handling errors, we can provide better user experiences and prevent unexpected crashes.
  
  // That concludes our exploration of error handling in JavaScript!
  // Feel free to experiment and explore further with different error handling techniques and best practices.
  
  // Note: The code examples in this file are for demonstration purposes and may require additional setup or modifications to work in a real-world scenario.
  