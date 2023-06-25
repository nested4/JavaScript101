// 15_for_loops.js

// In this file, we will explore the usage of for loops in JavaScript.

// Key Differences with Java:
// 1. The syntax for the for loop in JavaScript is similar to Java, with some minor differences.
// 2. JavaScript allows for more flexibility in loop conditions and iterations.
// 3. JavaScript also introduces the for...of loop for iterating over iterable objects.

// Basic For Loop:
// The basic for loop syntax in JavaScript is similar to Java.

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
  }
  
  // Output:
  // Iteration: 0
  // Iteration: 1
  // Iteration: 2
  // Iteration: 3
  // Iteration: 4
  
  // For...in Loop:
  // The for...in loop is used to iterate over the properties of an object.
  
  let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // Output:
  // name: John
  // age: 30
  // city: New York
  
  // For...of Loop:
  // The for...of loop is used to iterate over iterable objects such as arrays or strings.
  
  let fruits = ["apple", "banana", "orange"];
  
  for (let fruit of fruits) {
    console.log("Fruit:", fruit);
  }
  
  // Output:
  // Fruit: apple
  // Fruit: banana
  // Fruit: orange
  
  // Infinite Loop:
  // JavaScript allows for infinite loops without the need for a true condition.
  
  for (;;) {
    console.log("This is an infinite loop!");
    break; // Make sure to include a break statement to exit the loop.
  }
  
  // Output:
  // This is an infinite loop!
  
  // That concludes our exploration of for loops in JavaScript!
  // Stay tuned for the next file where we will cover more concepts and techniques.
  
  