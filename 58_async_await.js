// Async/Await

// Async/Await is a modern JavaScript feature that allows us to write asynchronous code in a more synchronous and readable manner.
// It is built on top of Promises and provides a more elegant syntax for handling asynchronous operations.

// In this file, we will explore the Async/Await syntax and how it can be used to simplify asynchronous programming.

// Basic Syntax
// The Async/Await syntax involves using the `async` keyword to declare an asynchronous function, and the `await` keyword to pause the execution of a function until a Promise is resolved or rejected.

// Example:
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  // The `await` keyword can only be used inside an async function.
  // It waits for the promise to resolve and then returns the resolved value.
  // If the promise is rejected, an error will be thrown, which can be caught using a try/catch block.
  
  // Using Async/Await with Promises
  // Async/Await can be used with Promises to handle asynchronous operations in a more concise way.
  
  // Example:
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function executeTasks() {
    console.log('Task 1');
    await delay(1000); // Pause execution for 1 second
    console.log('Task 2');
    await delay(1000); // Pause execution for 1 second
    console.log('Task 3');
  }
  
  executeTasks();
  
  // Error Handling
  // Async/Await provides a convenient way to handle errors using try/catch blocks.
  
  // Example:
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
      throw new Error('Failed to fetch data'); // Rethrow the error or handle it appropriately
    }
  }
  
  // Calling an Async Function
  // Async functions return a Promise, so they can be consumed in the same way as Promises.
  
  // Example:
  async function getData() {
    return 'Data';
  }
  
  getData()
    .then((data) => console.log('Received data:', data))
    .catch((error) => console.log('Error:', error));
  
  // Async/Await provides a more intuitive and synchronous-like way to write asynchronous code, making it easier to understand and maintain.
  
  // That concludes our exploration of Async/Await in JavaScript!
  // Feel free to experiment and explore further with async/await and its applications.
  
  // Note: The code examples in this file are for demonstration purposes and may require additional setup or modifications to work in a real-world scenario.
  