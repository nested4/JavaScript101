// 19_recap_loops_strings.js

// In this file, we will recap loops and strings in JavaScript.

// Key Differences with Java:
// 1. JavaScript offers different loop constructs such as for loop, while loop, and do-while loop, similar to Java.
// 2. JavaScript strings are immutable, meaning they cannot be changed once created. In Java, strings are mutable.

// Loop Recap:
// For Loop:
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  // While Loop:
  let counter = 1;
  while (counter <= 5) {
    console.log(counter);
    counter++;
  }
  
  // Do-While Loop:
  let number = 1;
  do {
    console.log(number);
    number++;
  } while (number <= 5);
  
  // String Recap:
  let str = "Hello, World!";
  
  console.log("Length:", str.length); // Output: 13
  console.log("Uppercase:", str.toUpperCase()); // Output: HELLO, WORLD!
  console.log("Lowercase:", str.toLowerCase()); // Output: hello, world!
  console.log("Substring:", str.substring(0, 5)); // Output: Hello
  
  // String Concatenation:
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + " " + lastName;
  console.log("Full Name:", fullName); // Output: John Doe
  
  // String Interpolation (Template Literals):
  let age = 25;
  let message = `My name is ${fullName} and I am ${age} years old.`;
  console.log("Message:", message);
  // Output: My name is John Doe and I am 25 years old.
  
  // That concludes our recap of loops and strings in JavaScript!
  // Stay tuned for the next file where we will cover more concepts and techniques.
  
  