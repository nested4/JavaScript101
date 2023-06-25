// 53_map_functional_interface.js

// Map Continued, Functional Interface and Lambda
// In this file, we will continue exploring the Map data structure in JavaScript. We will also introduce the concept of functional interfaces and lambdas.

// Map Operations:

const map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// Iterating over Keys:

console.log("Keys:");
for (const key of map.keys()) {
  console.log(key);
}
// Output:
// name
// age
// city

// Iterating over Values:

console.log("Values:");
for (const value of map.values()) {
  console.log(value);
}
// Output:
// John
// 30
// New York

// Iterating over Entries:

console.log("Entries:");
for (const entry of map.entries()) {
  console.log(entry);
}
// Output:
// [ 'name', 'John' ]
// [ 'age', 30 ]
// [ 'city', 'New York' ]

// Functional Interfaces:

// In JavaScript, there are no dedicated functional interfaces like in Java.
// However, JavaScript supports higher-order functions, which can be used to achieve similar functionality.

// Example:

// Higher-order function to perform a specific operation on each element of an array
function forEach(arr, callback) {
  for (const element of arr) {
    callback(element);
  }
}

// Lambda (Anonymous Function) as a callback
forEach([1, 2, 3, 4, 5], (num) => console.log(num * num));
// Output:
// 1
// 4
// 9
// 16
// 25

// That concludes our exploration of the Map data structure, functional interfaces, and lambdas in JavaScript!
// You now have a good understanding of these concepts and their usage in JavaScript.

