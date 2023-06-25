// 35_oop_encapsulation.js

// OOP Encapsulation
// In this file, we will explore the concept of encapsulation in Object-Oriented Programming (OOP) using JavaScript.

// Encapsulation:
// Encapsulation is the practice of bundling data (properties) and functionality (methods) together within a class.
// It allows for better organization, data protection, and code reusability.

// Example demonstrating encapsulation:
class Person {
    constructor(name, age) {
      this._name = name; // Encapsulated property (convention: prefix with underscore)
      this._age = age; // Encapsulated property (convention: prefix with underscore)
    }
  
    // Encapsulated method
    sayHello() {
      console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
    }
  
    // Getter method for name
    get name() {
      return this._name;
    }
  
    // Setter method for name
    set name(newName) {
      this._name = newName;
    }
  
    // Getter method for age
    get age() {
      return this._age;
    }
  
    // Setter method for age
    set age(newAge) {
      this._age = newAge;
    }
  }
  
  // Create a person object
  const person = new Person("John", 30);
  
  // Access encapsulated properties using getter methods
  console.log("Name:", person.name); // Output: John
  console.log("Age:", person.age); // Output: 30
  
  // Update encapsulated properties using setter methods
  person.name = "Jane";
  person.age = 25;
  
  // Call encapsulated method
  person.sayHello(); // Output: Hello, my name is Jane and I am 25 years old.
  
  // Note: The encapsulated properties (_name and _age) are conventionally considered private and should not be accessed directly.
  
  // Additional Concepts:
  
  // - Encapsulation allows for data protection and prevents direct access to encapsulated properties.
  // - Getter and setter methods provide controlled access to encapsulated properties.
  // - Developers can use naming conventions, like prefixing properties with an underscore (_), to indicate intended privacy.
  
  // That concludes our exploration of encapsulation in JavaScript!
  // Stay tuned for the next file where we will cover OOP inheritance introduction.
  
  