
  // 27_custom_methods_practice.js

// Custom Methods Practice
// In this file, we will practice writing custom methods in JavaScript.

// Key Differences with Java:
// 1. JavaScript functions are more flexible and can be defined without explicitly specifying return types.
//    In Java, return types must be declared for methods.
// 2. JavaScript uses the "function" keyword to define functions, while Java uses the "public static" keywords.
// 3. JavaScript supports anonymous functions and higher-order functions, which provide powerful functional programming capabilities.

// Custom Method Examples:

// Example 1: Simple Addition
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  let sum = addNumbers(5, 3);
  console.log("Sum:", sum); // Output: 8
  
  // Example 2: Calculate Average
  function calculateAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total / numbers.length;
  }
  
  let average = calculateAverage([10, 20, 30, 40, 50]);
  console.log("Average:", average); // Output: 30
  
  // Example 3: Check Even or Odd
  function isEven(number) {
    return number % 2 === 0;
  }
  
  let num1 = 24;
  console.log(num1 + " is even:", isEven(num1)); // Output: true
  
  let num2 = 37;
  console.log(num2 + " is even:", isEven(num2)); // Output: false
  
  // Feel free to experiment with more custom methods and test them here.
  
  // That concludes our practice with custom methods in JavaScript!
  // Stay tuned for the next file where we will cover more concepts and topics.
  
  