// 45_oop_abstraction_interface.js

// OOP Abstraction Continued: Interface
// In this file, we will further explore interfaces in JavaScript and understand their implementation and usage.

// Interface Implementation:
// To implement an interface, a class must provide implementations for all the methods defined in the interface.

// Example:
// Define an interface called Shape that requires classes to implement the area() method.

class Shape {
    area() {
      throw new Error("Method 'area' must be implemented");
    }
  }
  
  // Implement the Shape interface in two classes: Circle and Rectangle.
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // Create instances of the Circle and Rectangle classes and call the area() method.
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.area()); // Output: Circle Area: 78.53981633974483
  
  const rectangle = new Rectangle(4, 6);
  console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 24
  
  // Usage of Interfaces:
  // Interfaces can be used to define the expected behavior of objects and enforce consistency across different classes.
  
  // Example:
  // Define an interface called Logger that requires classes to implement the log() method.
  
  class Logger {
    log(message) {
      throw new Error("Method 'log' must be implemented");
    }
  }
  
  // Implement the Logger interface in a class called ConsoleLogger.
  
  class ConsoleLogger extends Logger {
    log(message) {
      console.log(`[LOG]: ${message}`);
    }
  }
  
  // Create an instance of the ConsoleLogger class and call the log() method.
  
  const logger = new ConsoleLogger();
  logger.log("Hello, world!"); // Output: [LOG]: Hello, world!
  
  // Key Takeaways:
  // - Interfaces provide a way to define the expected behavior of objects.
  // - Classes that implement an interface must provide implementations for all the methods defined in the interface.
  // - Interfaces help enforce consistency and facilitate polymorphism.
  
  // That wraps up our exploration of interfaces in JavaScript!
  // Stay tuned for the next file where we will dive into the concept of polymorphism.
  
  