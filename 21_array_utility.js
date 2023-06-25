// array_utility.js

// In this file, we will explore array utility methods in JavaScript.

// Key Differences with Java:
// 1. JavaScript provides a rich set of built-in array utility methods, which simplifies common array operations.
//    Java requires manual implementation of similar functionality using loops or external libraries.
// 2. JavaScript array utility methods are more expressive and concise compared to their Java counterparts.

// Creating an Array:
let numbers = [1, 2, 3, 4, 5]; // An array of numbers

// Accessing Array Elements:
console.log(numbers[0]); // Output: 1
console.log(numbers[numbers.length - 1]); // Output: 5

// Adding Elements to an Array:

// push(): Add one or more elements to the end of an array.
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// unshift(): Add one or more elements to the beginning of an array.
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// splice(): Add or remove elements at a specific position in an array.
numbers.splice(3, 0, 2.5);
console.log(numbers); // Output: [0, 1, 2, 2.5, 3, 4, 5, 6]

// Removing Elements from an Array:

// pop(): Remove the last element from an array.
numbers.pop();
console.log(numbers); // Output: [0, 1, 2, 2.5, 3, 4, 5]

// shift(): Remove the first element from an array.
numbers.shift();
console.log(numbers); // Output: [1, 2, 2.5, 3, 4, 5]

// splice(): Remove elements from a specific position in an array.
numbers.splice(2, 2);
console.log(numbers); // Output: [1, 2.5, 4, 5]

// Modifying Elements in an Array:

// Changing the value of an element at a specific index.
numbers[1] = 3;
console.log(numbers); // Output: [1, 3, 4, 5]

// Utility Methods:

// concat(): Concatenate two or more arrays and return a new array.
let moreNumbers = [6, 7];
let merged = numbers.concat(moreNumbers);
console.log(merged); // Output: [1, 3, 4, 5, 6, 7]

// slice(): Create a new array by extracting a portion of an existing array.
let sliced = merged.slice(2, 5);
console.log(sliced); // Output: [4, 5, 6]

// join(): Create a string by joining all elements of an array using a specified separator.
let joined = merged.join("-");
console.log(joined); // Output: "1-3-4-5-6-7"

// indexOf(): Find the first occurrence of an element in an array and return its index.
let index = merged.indexOf(4);
console.log(index); // Output: 2

// lastIndexOf(): Find the last occurrence of an element in an array and return its index.
let lastIndex = merged.lastIndexOf(6);
console.log(lastIndex); // Output: 4

// includes(): Check if an element exists in an array and return true or false.
let includes = merged.includes(7);
console.log(includes); // Output: true

// reverse(): Reverse the order of elements in an array.
let reversed = merged.reverse();
console.log(reversed); // Output: [7, 6, 5, 4, 3, 1]

// sort(): Sort the elements of an array in ascending order (based on Unicode values).
let sorted = merged.sort();
console.log(sorted); // Output: [1, 3, 4, 5, 6, 7]

// forEach(): Execute a provided function for each element in an array.
merged.forEach(function (element) {
  console.log(element);
});

// map(): Create a new array by applying a function to each element in an array.
let doubled = merged.map(function (element) {
  return element * 2;
});
console.log(doubled);

// filter(): Create a new array with all elements that pass a provided test.
let evenNumbers = merged.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNumbers);

// reduce(): Apply a function to an accumulator and each element in an array to reduce it to a single value.
let sum = merged.reduce(function (accumulator, element) {
  return accumulator + element;
}, 0);
console.log(sum);

// find(): Find the first element in an array that satisfies a provided test function.
let found = merged.find(function (element) {
  return element > 4;
});
console.log(found);

// some(): Check if at least one element in an array satisfies a provided test function.
let hasGreaterThanSix = merged.some(function (element) {
  return element > 6;
});
console.log(hasGreaterThanSix);

// every(): Check if all elements in an array satisfy a provided test function.
let allLessThanTen = merged.every(function (element) {
  return element < 10;
});
console.log(allLessThanTen);

// That covers various utility methods for arrays in JavaScript!
// Feel free to use these methods as per your needs.

