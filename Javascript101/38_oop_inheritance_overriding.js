// 39_oop_inheritance_overriding.js

// OOP Inheritance Continued: Method Overriding
// In this file, we will explore the concept of method overriding in JavaScript, where a child class defines a method with the same name as the parent class, effectively replacing the parent class's implementation.

// Method Overriding:
// Method overriding allows a child class to provide its own implementation of a method inherited from the parent class.

// Example demonstrating method overriding:

// Parent class
class Shape {
    constructor() {
      this._name = "Shape";
    }
  
    // Parent class method
    draw() {
      console.log(`Drawing a ${this._name}`);
    }
  }
  
  // Child class inheriting from the Shape class
  class Circle extends Shape {
    constructor(radius) {
      super();
      this._name = "Circle";
      this._radius = radius;
    }
  
    // Override the parent class method
    draw() {
      console.log(`Drawing a ${this._name} with radius ${this._radius}`);
    }
  }
  
  // Create a Circle object
  const circle = new Circle(5);
  
  // Call the overridden method
  circle.draw(); // Output: Drawing a Circle with radius 5
  
  // Additional Concepts:
  
  // - Method overriding allows a child class to provide a specialized implementation of a method inherited from the parent class.
  // - The child class method with the same name as the parent class method will be called instead of the parent class method.
  
  // That concludes our exploration of method overriding in JavaScript inheritance!
  // Stay tuned for the next file where we will practice encapsulation and inheritance together.
  
  