// 46_oop_polymorphism_intro.js

// OOP Polymorphism Introduction
// In this file, we will explore the concept of polymorphism in object-oriented programming.

// Polymorphism:
// Polymorphism refers to the ability of objects to take on different forms or have multiple behaviors based on their underlying class or interface.

// Example:
// Create a class called Animal with a method called makeSound.

class Animal {
    makeSound() {
      console.log("The animal makes a sound");
    }
  }
  
  // Create two subclasses, Dog and Cat, that inherit from the Animal class and override the makeSound method.
  
  class Dog extends Animal {
    makeSound() {
      console.log("The dog barks");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("The cat meows");
    }
  }
  
  // Create instances of the Dog and Cat classes and call the makeSound method.
  
  const dog = new Dog();
  dog.makeSound(); // Output: The dog barks
  
  const cat = new Cat();
  cat.makeSound(); // Output: The cat meows
  
  // Polymorphic Behavior:
  // Even though the variables dog and cat are declared as Animal type, they can still exhibit polymorphic behavior.
  // When the makeSound method is called on these variables, the overridden method in the respective subclasses is executed.
  
  const animal1 = new Dog();
  animal1.makeSound(); // Output: The dog barks
  
  const animal2 = new Cat();
  animal2.makeSound(); // Output: The cat meows
  
  // Polymorphism and Interfaces:
  // Polymorphism can also be achieved through interfaces.
  // By implementing the same interface, different classes can have different implementations of the interface methods.
  
  // Example:
  // Define an interface called Printable with a method called print.
  
  class Printable {
    print() {
      console.log("Printing...");
    }
  }
  
  // Implement the Printable interface in two classes: Document and Image.
  
  class Document {
    print() {
      console.log("Printing document...");
    }
  }
  
  class Image {
    print() {
      console.log("Printing image...");
    }
  }
  
  // Create instances of the Document and Image classes and call the print method.
  
  const doc = new Document();
  doc.print(); // Output: Printing document...
  
  const img = new Image();
  img.print(); // Output: Printing image...
  
  // Polymorphic Behavior with Interfaces:
  // Even though the variables doc and img are declared as Printable type, they can still exhibit polymorphic behavior.
  // When the print method is called on these variables, the respective implementations in the classes are executed.
  
  const printable1 = new Document();
  printable1.print(); // Output: Printing document...
  
  const printable2 = new Image();
  printable2.print(); // Output: Printing image...
  
  // Key Takeaways:
  // - Polymorphism allows objects to exhibit multiple forms or behaviors based on their underlying class or interface.
  // - Subclasses can override methods defined in the superclass to provide different implementations.
  // - Interfaces can be implemented by different classes to provide different implementations of interface methods.
  // - Polymorphism allows for code reusability, flexibility, and extensibility in object-oriented programming.
  
  // That concludes our introduction to polymorphism in JavaScript!
  // Stay tuned for the next file where we will continue exploring polymorphic behavior and reviewing OOP concepts.
  
  