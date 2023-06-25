// 14_string.js

// In this file, we will continue exploring string operations in JavaScript.

// Key Differences with Java:
// 1. JavaScript strings are treated as objects rather than primitive types, allowing us to access various string methods.
// 2. JavaScript provides additional string methods and properties compared to Java.

// String Comparison:
// JavaScript provides the localeCompare() method to compare strings.

let str1 = "apple";
let str2 = "banana";

let result = str1.localeCompare(str2);
console.log("Comparison Result:", result); // Output: -1 (str1 comes before str2 in alphabetical order)

// String Searching:
// JavaScript provides various methods for searching within strings.

let text = "JavaScript is awesome!";
let searchWord = "awesome";

let includes = text.includes(searchWord);
console.log("Includes:", includes); // Output: true

let startsWith = text.startsWith("JavaScript");
console.log("Starts With:", startsWith); // Output: true

let endsWith = text.endsWith("!");
console.log("Ends With:", endsWith); // Output: true

let indexOf = text.indexOf("is");
console.log("Index Of:", indexOf); // Output: 11

let lastIndex = text.lastIndexOf("is");
console.log("Last Index Of:", lastIndex); // Output: 11

// String Splitting and Joining:
// JavaScript provides split() and join() methods for splitting and joining strings.

let sentence = "JavaScript is an awesome programming language.";
let words = sentence.split(" ");
console.log("Words:", words); // Output: ["JavaScript", "is", "an", "awesome", "programming", "language."]

let joinedSentence = words.join(" ");
console.log("Joined Sentence:", joinedSentence); // Output: "JavaScript is an awesome programming language."

// String Padding:
// JavaScript provides padStart() and padEnd() methods for padding strings with a specified character.

let number = "42";
let paddedNumber = number.padStart(5, "0");
console.log("Padded Number:", paddedNumber); // Output: "00042"

// String Repeating:
// JavaScript provides the repeat() method to repeat a string a specified number of times.

let word = "Hello";
let repeatedWord = word.repeat(3);
console.log("Repeated Word:", repeatedWord); // Output: "HelloHelloHello"

// That concludes our exploration of string operations in JavaScript!
// Stay tuned for the next file where we will cover more concepts and techniques.

