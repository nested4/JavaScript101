// 38_oop_inheritance_super.js

// OOP Inheritance Continued: Super Keyword
// In this file, we will explore the usage of the "super" keyword in JavaScript to access the parent class's properties and methods.

// The "super" keyword:
// The "super" keyword is used to refer to the parent class. It can be used to access the parent class's properties, methods, and constructor.

// Example demonstrating the usage of the "super" keyword:

// Parent class
class Animal {
    constructor(name) {
      this._name = name;
    }
  
    // Parent class method
    speak() {
      console.log("The animal makes a sound.");
    }
  }
  
  // Child class inheriting from the Animal class
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor using the "super()" method
      this._breed = breed;
    }
  
    // Override the parent class method
    speak() {
      super.speak(); // Call the parent class method using the "super" keyword
      console.log("The dog barks.");
    }
  
    // Child class method
    getBreed() {
      return this._breed;
    }
  }
  
  // Create a dog object
  const dog = new Dog("Buddy", "Labrador Retriever");
  
  // Access parent class property using the "super" keyword
  console.log("Name:", dog._name); // Output: Buddy
  
  // Call parent class method using the "super" keyword
  dog.speak(); // Output: The animal makes a sound.
               //         The dog barks.
  
  // Access child class property
  console.log("Breed:", dog.getBreed()); // Output: Labrador Retriever
  
  // Additional Concepts:
  
  // - The "super()" method is used to call the parent class's constructor.
  // - The "super" keyword can also be used to call parent class methods.
  
  // That concludes our exploration of the "super" keyword in JavaScript inheritance!
  // Stay tuned for the next file where we will continue discussing inheritance and method overriding.
  
  