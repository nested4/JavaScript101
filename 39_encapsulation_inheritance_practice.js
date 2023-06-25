// 40_encapsulation_inheritance_practice.js

// Encapsulation and Inheritance Practice
// In this file, we will practice implementing encapsulation and inheritance concepts in JavaScript.

// Encapsulation:
// Encapsulation is the practice of bundling data and related methods into a single unit called a class.
// It allows for better organization and control over the data and behavior of an object.

// Inheritance:
// Inheritance is a mechanism in which one class inherits properties and methods from another class.
// It allows for code reuse and the creation of hierarchical relationships between classes.

// Practice Example:

// Parent class
class Vehicle {
    constructor(make, model) {
      this._make = make;
      this._model = model;
    }
  
    getMake() {
      return this._make;
    }
  
    getModel() {
      return this._model;
    }
  
    startEngine() {
      console.log("Engine started");
    }
  }
  
  // Child class inheriting from Vehicle class
  class Car extends Vehicle {
    constructor(make, model, color) {
      super(make, model);
      this._color = color;
    }
  
    getColor() {
      return this._color;
    }
  
    drive() {
      console.log(`Driving the ${this._color} ${this._make} ${this._model}`);
    }
  }
  
  // Create a Car object
  const myCar = new Car("Toyota", "Camry", "Red");
  
  // Access inherited methods and properties
  console.log("Make:", myCar.getMake()); // Output: Toyota
  console.log("Model:", myCar.getModel()); // Output: Camry
  
  // Call inherited method
  myCar.startEngine(); // Output: Engine started
  
  // Call subclass method
  myCar.drive(); // Output: Driving the Red Toyota Camry
  
  // Additional Concepts:
  
  // - Encapsulation allows for data hiding and provides methods to access and modify the encapsulated data.
  // - Inheritance allows a child class to inherit properties and methods from a parent class.
  // - Child classes can extend the functionality of the parent class by adding new methods or overriding existing methods.
  
  // That concludes our practice of encapsulation and inheritance in JavaScript!
  // Stay tuned for the next file where we will explore the concepts of protected access modifier and the final keyword.
  
  