// 44_oop_abstraction_interface_intro.js

// OOP Abstraction Continued: Interface Introduction
// In this file, we will delve deeper into the concept of abstraction in object-oriented programming using interfaces in JavaScript.

// Interface:
// An interface is a way to define a contract that a class must adhere to. It specifies a set of methods that a class must implement.

// Example:
// Define an interface called Printable that requires classes to implement a print() method.

class Printable {
    print() {
      throw new Error("Method 'print' must be implemented");
    }
  }
  
  // Implement the Printable interface in a class called Book.
  
  class Book extends Printable {
    constructor(title, author) {
      super();
      this.title = title;
      this.author = author;
    }
  
    print() {
      console.log(`Book: ${this.title} by ${this.author}`);
    }
  }
  
  // Create an instance of the Book class and call the print() method.
  
  const book = new Book("The Alchemist", "Paulo Coelho");
  book.print(); // Output: Book: The Alchemist by Paulo Coelho
  
  // Key Differences between Interfaces and Abstract Classes:
  // - An abstract class can have both implemented and abstract methods, while an interface can only have method signatures (no implementations).
  // - A class can implement multiple interfaces, but it can only inherit from a single abstract class.
  
  // Additional Concepts:
  // - Interfaces provide a way to define a contract that classes must adhere to.
  // - They specify a set of methods that a class must implement.
  // - Classes can implement multiple interfaces.
  
  // That concludes our introduction to interfaces in JavaScript!
  // Stay tuned for the next file where we will continue exploring the concept of abstraction with interfaces.
  
  