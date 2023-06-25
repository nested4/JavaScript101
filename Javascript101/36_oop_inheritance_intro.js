// 37_oop_inheritance_intro.js

// OOP Inheritance Introduction
// In this file, we will explore the concept of inheritance in Object-Oriented Programming (OOP) using JavaScript.

// Inheritance:
// Inheritance is a mechanism in OOP that allows a class to inherit properties and methods from another class.
// It promotes code reuse, modularity, and the creation of a hierarchical class structure.

// Example demonstrating inheritance:
// Parent class
class Shape {
    constructor(color) {
      this._color = color;
    }
  
    // Encapsulated method
    getColor() {
      return this._color;
    }
  
    // Method to be overridden by child classes
    calculateArea() {
      console.log("Method not implemented in the base class.");
    }
  }
  
  // Child class inheriting from the Shape class
  class Circle extends Shape {
    constructor(color, radius) {
      super(color); // Call the parent class constructor
      this._radius = radius;
    }
  
    // Override the calculateArea() method
    calculateArea() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  // Create a circle object
  const circle = new Circle("Red", 5);
  
  // Access inherited property using the getColor() method from the parent class
  console.log("Color:", circle.getColor()); // Output: Red
  
  // Call the overridden method from the child class
  console.log("Area:", circle.calculateArea()); // Output: 78.53981633974483
  
  // Additional Concepts:
  
  // - The child class extends the parent class using the "extends" keyword.
  // - The child class can override methods from the parent class to provide its own implementation.
  // - The "super" keyword is used to call the constructor and methods of the parent class from the child class.
  
  // That concludes our introduction to inheritance in JavaScript!
  // Stay tuned for the next file where we will explore continued topics on OOP inheritance.
  
  