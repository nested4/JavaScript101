// Promises

// Promises are a built-in feature in JavaScript that help us deal with asynchronous operations and handle their results.
// They provide a way to write cleaner and more readable asynchronous code compared to traditional callback functions.

// In this file, we will explore Promises, their syntax, and how to work with them effectively.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // The Promise constructor takes a function with two parameters: resolve and reject.
    // Inside this function, we perform an asynchronous operation and call resolve or reject based on the outcome.
  
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve('Operation succeeded!'); // Resolving the promise with a value
      } else {
        reject('Operation failed!'); // Rejecting the promise with an error
      }
    }, 2000);
  });
  
  // Consuming a Promise
  myPromise
    .then((result) => {
      // The `.then()` method is called when the promise is resolved successfully.
      console.log(result); // Output: "Operation succeeded!"
    })
    .catch((error) => {
      // The `.catch()` method is called when the promise is rejected.
      console.log(error); // Output: "Operation failed!"
    })
    .finally(() => {
      // The `.finally()` method is called regardless of the promise's outcome.
      console.log('Promise complete!');
    });
  
  // Chaining Promises
  myPromise
    .then((result) => {
      console.log(result);
      return Promise.resolve('Chained Promise'); // Return another resolved promise for chaining
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Promisify Callback Functions
  // Promises can also be used to convert traditional callback-based functions into promise-based functions.
  
  function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
      // Simulating reading a file asynchronously
      setTimeout(() => {
        const success = true;
  
        if (success) {
          resolve('File content'); // Resolving the promise with file content
        } else {
          reject('Error reading file'); // Rejecting the promise with an error
        }
      }, 2000);
    });
  }
  
  readFileAsync('file.txt')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Promises provide a clean and structured way to handle asynchronous operations and handle their outcomes.
  // They simplify error handling and allow for easy chaining of multiple asynchronous operations.
  
  // That concludes our exploration of Promises in JavaScript!
  // Feel free to experiment and explore further with promises and their applications.
  