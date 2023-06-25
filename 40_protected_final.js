// 41_protected_final.js

// Protected Access Modifier and Final Keyword
// In this file, we will explore the concepts of the protected access modifier and the final keyword in JavaScript.

// Protected Access Modifier:
// In JavaScript, there is no built-in protected access modifier like in Java.
// However, we can use naming conventions and encapsulation to achieve similar behavior.

// Example:
class Person {
    constructor(name) {
      this._name = name;
    }
  
    getName() {
      return this._name;
    }
  }
  
  class Employee extends Person {
    constructor(name, empId) {
      super(name);
      this._empId = empId;
    }
  
    getEmployeeId() {
      return this._empId;
    }
  
    getEmployeeInfo() {
      return `Name: ${this._name}, Employee ID: ${this._empId}`;
    }
  }
  
  const employee = new Employee("John Doe", 12345);
  console.log(employee.getName()); // Output: John Doe
  console.log(employee.getEmployeeId()); // Output: 12345
  console.log(employee.getEmployeeInfo()); // Output: Name: John Doe, Employee ID: 12345
  
  // In the above example, the `_name` property is conventionally considered protected.
  // It is accessible within the class and its subclasses, but not recommended to be accessed from outside.
  
  // Final Keyword:
  // In JavaScript, there is no built-in final keyword like in Java to prevent method or class overriding.
  // However, we can use conventions and documentation to indicate that a method or class should not be overridden.
  
  // Example:
  class Shape {
    calculateArea() {
      // Placeholder implementation
      throw new Error("Method 'calculateArea' must be overridden");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this._radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.calculateArea()); // Output: 78.53981633974483
  
  // In the above example, the `calculateArea` method in the `Shape` class throws an error, indicating that it must be overridden.
  // The `Circle` class overrides the method and provides its own implementation.
  
  // Additional Concepts:
  
  // - The protected access modifier in JavaScript is achieved through naming conventions and encapsulation.
  // - The final keyword in JavaScript is not built-in but can be simulated using conventions and documentation.
  
  // That concludes our exploration of the protected access modifier and the final keyword in JavaScript!
  // Stay tuned for the next file where we will dive into the concepts of exceptions in JavaScript.
  
  