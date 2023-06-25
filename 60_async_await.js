// Asynchronous Functions with Async/Await

// Async functions are a syntactical feature introduced in ECMAScript 2017 (ES8) that makes working with promises
// easier and more readable. They provide a more synchronous style of writing asynchronous code.

// The async keyword is used to define an asynchronous function. It can be placed before the function declaration or
// before an arrow function expression.

// The await keyword can be used inside an async function to pause the execution and wait for a promise to resolve
// before proceeding to the next line of code.

// Example:

// An async function that returns a resolved promise after a specified delay.
async function delayExample() {
    console.log("Before delay");
  
    // Use the await keyword to pause the execution and wait for the promise to resolve.
    await delay(2000);
  
    console.log("After delay");
  }
  
  // A utility function that returns a promise that resolves after the specified delay.
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  // Call the async function.
  delayExample();
  
  // Output:
  // Before delay
  // (waits for 2 seconds)
  // After delay
  
  // In the example above, the delayExample() function is an async function that pauses the execution using the await
  // keyword before the delay promise is resolved. This allows the "After delay" message to be printed after the
  // specified delay.
  
  // Async functions can also handle errors using try-catch blocks, just like synchronous code.
  
  // Example:
  
  async function errorHandlingExample() {
    try {
      // This asynchronous operation will throw an error.
      await performAsyncOperation();
    } catch (error) {
      console.log("Error caught:", error.message);
    }
  }
  
  function performAsyncOperation() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation that encounters an error.
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
  // Call the async function.
  errorHandlingExample();
  
  // Output:
  // Error caught: Something went wrong
  
  // In the example above, the errorHandlingExample() function handles the error thrown by the performAsyncOperation()
  // function using a try-catch block. The error message is then logged to the console.
  
  // Async/await provides a more straightforward and synchronous-like way of working with asynchronous code, making it
  // easier to write and understand.
  
  // That concludes our overview of async/await in JavaScript.
  
  