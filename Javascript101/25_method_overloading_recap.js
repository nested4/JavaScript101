// custom_methods_overloading.js

// In this file, we will explore method overloading in JavaScript.

// Key Differences with Java:
// 1. JavaScript does not natively support method overloading like Java does.
// 2. In JavaScript, we can achieve method overloading by checking the number and type of arguments passed to a function and implementing different logic based on those conditions.

// Method Overloading in JavaScript:

// Example 1: Add Function with Different Implementations
function add(a, b) {
    return a + b;
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  let sum1 = add(2, 3);
  console.log("Sum 1:", sum1); // Output: Sum 1: 5
  
  let sum2 = add(2, 3, 4);
  console.log("Sum 2:", sum2); // Output: Sum 2: 9
  
  // Example 2: Greet Function with Different Implementations
  function greet(name) {
    console.log("Hello, " + name);
  }
  
  function greet(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName);
  }
  
  greet("John"); // Output: Hello, John
  greet("John", "Doe"); // Output: Hello, John Doe
  
  // Although JavaScript does not have native support for method overloading, we can achieve similar functionality by checking the number and type of arguments passed to a function and implementing different logic accordingly.
  
  // It's important to note that when we define multiple functions with the same name in JavaScript, the latest implementation will overwrite the previous ones. As a result, only the most recent implementation will be accessible.
  
  // Simulating method overloading in JavaScript requires careful consideration of argument types and conditions to ensure proper function execution.
  
  // Feel free to explore different techniques for achieving method overloading in JavaScript and adapt them to suit your needs.
  
  