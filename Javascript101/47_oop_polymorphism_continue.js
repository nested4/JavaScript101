// 47_oop_polymorphism_continue.js

// OOP Polymorphism Continued, OOP Review
// In this file, we will continue exploring polymorphic behavior and review key concepts in object-oriented programming.

// Polymorphism with Arrays:
// Arrays in JavaScript can hold objects of different types, allowing for polymorphic behavior.

// Example:
// Create an array that can hold objects of different shapes.

const shapes = [
    { type: "Circle", radius: 5 },
    { type: "Square", sideLength: 10 },
    { type: "Triangle", base: 8, height: 6 },
  ];
  
  // Iterate over the array and call a common method on each object.
  
  shapes.forEach((shape) => {
    console.log("Type:", shape.type);
    if (shape.type === "Circle") {
      console.log("Area:", Math.PI * shape.radius ** 2);
    } else if (shape.type === "Square") {
      console.log("Area:", shape.sideLength ** 2);
    } else if (shape.type === "Triangle") {
      console.log("Area:", (shape.base * shape.height) / 2);
    }
  });
  
  // Output:
  // Type: Circle
  // Area: 78.53981633974483
  // Type: Square
  // Area: 100
  // Type: Triangle
  // Area: 24
  
  // OOP Review:
  // Here's a quick review of important concepts in object-oriented programming (OOP):
  
  // - Encapsulation: Enclosing data and behavior within a class, hiding internal details and exposing a public interface.
  // - Inheritance: Creating new classes (subclasses) based on existing classes (superclasses), inheriting their attributes and behaviors.
  // - Polymorphism: Objects of different classes can be treated as objects of a common superclass, allowing for different behaviors based on the actual object's class.
  // - Abstraction: Defining a simplified representation of complex objects, focusing on essential characteristics and hiding unnecessary details.
  // - Interface: A contract specifying a set of methods that a class must implement, enabling polymorphic behavior.
  // - Class: A blueprint for creating objects, defining attributes (properties) and behaviors (methods) that the objects will have.
  
  // By leveraging these concepts, you can design and implement robust and flexible object-oriented systems in JavaScript.
  
  // That concludes our exploration of polymorphism and the OOP review in JavaScript!
  // Stay tuned for the next file where we will dive into collections and their usage in JavaScript.
  
  