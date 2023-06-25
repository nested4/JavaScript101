// Generators

// Generators are a special type of function in JavaScript that can be paused and resumed, allowing for the generation
// of a sequence of values. They provide a powerful mechanism for controlling the flow of asynchronous code.

// In this file, we will explore Generators, their syntax, and how to use them effectively.

// Creating a Generator Function
function* myGenerator() {
    // Generator function declaration using the "*" symbol
    // Inside the generator function, we use the "yield" keyword to pause the execution and yield a value
  
    yield 1; // Yielding the value 1
    yield 2; // Yielding the value 2
    yield 3; // Yielding the value 3
  
    // Generator function execution stops here
  }
  
  // Using a Generator
  const generator = myGenerator(); // Creating an instance of the generator
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  
  // Generators and Iterators
  // Generators are also iterators, meaning they can be used in for...of loops and other constructs that work with iterators.
  
  for (const value of myGenerator()) {
    console.log(value); // Output: 1, 2, 3
  }
  
  // Asynchronous Generators
  // Generators can also be used for asynchronous programming by combining them with Promises or Async/Await.
  
  function* asyncGenerator() {
    try {
      const result = yield someAsyncOperation(); // Yielding a Promise
      // Handle the result
    } catch (error) {
      // Handle the error
    }
  }
  
  // Using a Promise with an Async Generator
  const asyncIterator = asyncGenerator();
  
  asyncIterator
    .next()
    .then((result) => {
      // Handle the result
      return asyncIterator.next(result);
    })
    .then((result) => {
      // Handle the result
      return asyncIterator.next(result);
    })
    .catch((error) => {
      // Handle the error
    });
  
  // Generators provide a powerful tool for creating sequences of values, controlling asynchronous code flow, and implementing iterators.
  // They can be used to simplify complex asynchronous code and enhance code readability.
  
  // That concludes our exploration of Generators in JavaScript!
  // Feel free to experiment and explore further with generators and their applications.
  
  