// custom_methods_void.js

// In this file, we will explore custom methods with void return type in JavaScript.

// Key Differences with Java:
// 1. JavaScript does not require explicit return types for methods. Any function can be defined without specifying a return type, similar to void methods in Java.

// Custom Method with Void Return Type:

// Example 1: Printing a Greeting Message
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John"); // Output: Hello, John!
  
  // Example 2: Displaying a Message Multiple Times
  function printMessage(message, count) {
    for (let i = 0; i < count; i++) {
      console.log(message);
    }
  }
  
  printMessage("Welcome to JavaScript!", 3);
  // Output:
  // Welcome to JavaScript!
  // Welcome to JavaScript!
  // Welcome to JavaScript!
  
  // Example 3: Modifying an Array
  function addElement(array, element) {
    array.push(element);
  }
  
  let numbers = [1, 2, 3];
  addElement(numbers, 4);
  console.log(numbers); // Output: [1, 2, 3, 4]
  
  // Example 4: Performing an Action
  function logEvenNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  logEvenNumbers(10);
  // Output:
  // 0
  // 2
  // 4
  // 6
  // 8
  // 10
  
  // Custom methods with void return type in JavaScript allow us to encapsulate code and perform specific actions without returning a value.
  // These methods can be used for various purposes such as printing messages, modifying data structures, or performing iterative tasks.
  
  // Feel free to experiment with custom methods and explore different functionalities in JavaScript!
  
  