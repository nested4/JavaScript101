// 34_custom_class_statics.js

// Custom Class: Statics
// In this file, we will explore the concept of static members in custom classes in JavaScript.

// Key Differences with Java:
// 1. JavaScript does not have a specific "static" keyword like Java. Instead, static members are defined directly on the constructor function.
// 2. In Java, static members belong to the class itself, while in JavaScript, they are shared among all instances of the class.

// Static Members:

// Define a custom class with static members
function MathUtils() {}

// Define a static method
MathUtils.square = function (num) {
  return num * num;
};

// Define a static property
MathUtils.PI = 3.14159;

// Access static members without creating an object
console.log("Square of 5:", MathUtils.square(5)); // Output: 25
console.log("Value of PI:", MathUtils.PI); // Output: 3.14159

// Static members are shared among all instances
let math1 = new MathUtils();
let math2 = new MathUtils();
console.log("Square of 3:", math1.square(3)); // Output: 9
console.log("Square of 4:", math2.square(4)); // Output: 16

// Additional Concepts:

// - Static members in JavaScript can be functions or properties.
// - Static methods can only access other static members and cannot access instance-specific members.
// - Static members are accessed using the class name directly, without needing an object instance.

// JavaScript's approach to static members provides a convenient way to define utility functions and shared properties without the need for object instantiation.

// That concludes our exploration of static members in custom classes in JavaScript!
// Stay tuned for the next file where we will cover static, garbage collection, and access modifiers in JavaScript.

