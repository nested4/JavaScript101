// 20_arrays.js

// In this file, we will explore arrays in JavaScript.

// Key Differences with Java:
// 1. In JavaScript, arrays are dynamic and can hold elements of any type. Java arrays are static and have a fixed size and type.
// 2. JavaScript arrays can grow or shrink dynamically by adding or removing elements. Java arrays have a fixed length and cannot be resized.
// 3. JavaScript arrays can hold elements of different types in the same array, whereas Java arrays require elements of the same type.
// 4. JavaScript arrays are zero-indexed, meaning the first element is at index 0. Java arrays are also zero-indexed.

// Creating Arrays:
let numbers = [1, 2, 3, 4, 5]; // An array of numbers
let names = ["John", "Jane", "Jack"]; // An array of strings
let mixed = [1, "Hello", true]; // An array with mixed types

// Accessing Array Elements:
console.log(numbers[0]); // Output: 1
console.log(names[1]); // Output: Jane
console.log(mixed[2]); // Output: true

// Modifying Array Elements:
numbers[2] = 10; // Modify the third element to 10
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Array Length:
console.log(numbers.length); // Output: 5 (number of elements in the array)

// Array Methods:
numbers.push(6); // Add an element to the end of the array
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

numbers.pop(); // Remove the last element from the array
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Iterating over Arrays:
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Array Methods for Iteration:
names.forEach(function (name) {
  console.log(name);
});

// Array Methods for Transformation:
let doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);

// Array Methods for Filtering:
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

// That covers the basics of arrays in JavaScript!
// Stay tuned for the next file where we will explore more concepts and techniques.

