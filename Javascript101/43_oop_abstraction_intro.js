// 43_oop_abstraction_intro.js

// OOP Abstraction Introduction: Abstract Class and Abstract Method
// In this file, we will explore the concept of abstraction in object-oriented programming using abstract classes and abstract methods in JavaScript.

// Abstraction:
// Abstraction is a fundamental principle of object-oriented programming that allows us to represent complex real-world entities in a simplified manner.
// It focuses on defining the essential characteristics and behaviors of an object while hiding the unnecessary details.

// Abstract Class:
// An abstract class serves as a blueprint for other classes and cannot be instantiated on its own.
// It defines common properties and methods that derived classes can inherit and implement.

// Example:
class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented");
    }
  }
  
  // Derived classes can extend the abstract class and provide their own implementations for the abstract methods.
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle area:", circle.calculateArea()); // Output: Circle area: 78.53981633974483
  
  const rectangle = new Rectangle(4, 6);
  console.log("Rectangle area:", rectangle.calculateArea()); // Output: Rectangle area: 24
  
  // Abstract Method:
  // An abstract method is a method declared in an abstract class but does not contain an implementation.
  // Derived classes must provide their own implementation for the abstract method.
  
  // Example:
  class Animal {
    constructor() {
      if (new.target === Animal) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    speak() {
      throw new Error("Method 'speak' must be implemented");
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }
  
  const dog = new Dog();
  console.log(dog.speak()); // Output: Woof!
  
  const cat = new Cat();
  console.log(cat.speak()); // Output: Meow!
  
  // Additional Concepts:
  
  // - Abstraction allows us to represent complex objects in a simplified manner by focusing on essential characteristics and behaviors.
  // - Abstract classes serve as blueprints for other classes and cannot be instantiated on their own.
  // - Abstract methods are declared in abstract classes and must be implemented by derived classes.
  
  // That concludes our introduction to abstraction in JavaScript!
  // Stay tuned for the next file where we will explore interface introduction in OOP abstraction.
  
  