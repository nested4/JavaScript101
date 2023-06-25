// 16_for_loop_string_practices.js

// In this file, we will practice using for loops with strings in JavaScript.

// Key Differences with Java:
// 1. JavaScript treats strings as iterable objects, allowing for easy iteration using for loops.
// 2. JavaScript provides additional string manipulation methods and properties compared to Java.

// Looping through a String:
// In JavaScript, we can use a for loop to iterate through each character in a string.

let str = "Hello, World!";

for (let i = 0; i < str.length; i++) {
  console.log("Character at index", i, ":", str[i]);
}

// Output:
// Character at index 0 : H
// Character at index 1 : e
// Character at index 2 : l
// Character at index 3 : l
// Character at index 4 : o
// Character at index 5 : ,
// Character at index 6 :  
// Character at index 7 : W
// Character at index 8 : o
// Character at index 9 : r
// Character at index 10 : l
// Character at index 11 : d
// Character at index 12 : !

// String Manipulation:
// JavaScript provides various string manipulation methods.

// Converting to Upper Case:
let upperCaseStr = str.toUpperCase();
console.log("Upper Case:", upperCaseStr);

// Output: UPPER CASE: HELLO, WORLD!

// Converting to Lower Case:
let lowerCaseStr = str.toLowerCase();
console.log("Lower Case:", lowerCaseStr);

// Output: lower case: hello, world!

// Splitting the String:
let splitStr = str.split(",");
console.log("Split String:", splitStr);

// Output: Split String: [ 'Hello', ' World!' ]

// Substring:
let substring = str.substring(7, 12);
console.log("Substring:", substring);

// Output: Substring: World

// That concludes our practice with for loops and string manipulation in JavaScript!
// Stay tuned for the next file where we will cover more concepts and techniques.


