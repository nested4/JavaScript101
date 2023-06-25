// 29_arraylist.js

// ArrayList
// In this file, we will explore the ArrayList data structure in JavaScript.

// Key Differences with Java:
// 1. In Java, ArrayList is a built-in class provided by the Java Collections Framework.
//    In JavaScript, there is no built-in ArrayList class, but we can create similar functionality using arrays.
// 2. ArrayList in Java is dynamically resizable and can only store objects.
//    In JavaScript, arrays are dynamically resizable and can store any type of value, including objects, primitives, and mixed types.

// ArrayList Implementation in JavaScript:

// Create an empty ArrayList
let arrayList = [];

// Add elements to the ArrayList
arrayList.push("Apple");
arrayList.push("Banana");
arrayList.push("Orange");

console.log(arrayList); // Output: ["Apple", "Banana", "Orange"]

// Access elements by index
console.log(arrayList[0]); // Output: "Apple"
console.log(arrayList[1]); // Output: "Banana"
console.log(arrayList[2]); // Output: "Orange"

// Update an element
arrayList[1] = "Mango";
console.log(arrayList); // Output: ["Apple", "Mango", "Orange"]

// Remove an element
arrayList.splice(0, 1);
console.log(arrayList); // Output: ["Mango", "Orange"]

// Get the length of the ArrayList
console.log(arrayList.length); // Output: 2

// Iterate over the ArrayList
for (let i = 0; i < arrayList.length; i++) {
  console.log(arrayList[i]);
}

// ArrayList-like functionality in JavaScript can be achieved using arrays.
// JavaScript arrays are flexible and can store various types of values.

// That concludes our exploration of the ArrayList concept in JavaScript!
// Stay tuned for the next file where we will cover more concepts and topics.

