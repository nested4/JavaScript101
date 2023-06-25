// custom_methods_return.js

// In this file, we will explore custom methods with a return type in JavaScript.

// Key Differences with Java:
// 1. JavaScript does not require explicit return types for methods. Any function can be defined to return a value of any type.
// 2. JavaScript functions can return different types dynamically, unlike Java, which requires a fixed return type specified during method declaration.

// Custom Methods with a Return Type:

// Example 1: Calculating the Sum of Two Numbers
function sum(a, b) {
    return a + b;
  }
  
  let result = sum(5, 3);
  console.log("Sum:", result); // Output: Sum: 8
  
  // Example 2: Generating a Random Number
  function getRandomNumber() {
    return Math.random();
  }
  
  let randomNumber = getRandomNumber();
  console.log("Random Number:", randomNumber);
  
  // Example 3: Checking if a Number is Even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  let num = 6;
  let isEvenResult = isEven(num);
  console.log(num + " is even:", isEvenResult); // Output: 6 is even: true
  
  // Example 4: Capitalizing the First Letter of a String
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  let text = "javascript";
  let capitalizedText = capitalizeFirstLetter(text);
  console.log("Capitalized Text:", capitalizedText); // Output: Capitalized Text: Javascript
  
  // Custom methods with a return type in JavaScript allow us to encapsulate code and perform specific actions while returning a value.
  // These methods can be used to perform calculations, generate values, perform logical operations, manipulate strings, and more.
  
  // Feel free to experiment with custom methods and explore different functionalities in JavaScript!
  

  
  