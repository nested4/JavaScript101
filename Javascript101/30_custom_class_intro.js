// 30_custom_class_intro.js

// Custom Class Introduction
// In this file, we will explore the concept of custom classes in JavaScript.

// Key Differences with Java:
// 1. JavaScript is a prototype-based language, whereas Java is a class-based language.
//    In JavaScript, we can create objects directly from prototypes or constructor functions, whereas in Java, objects are created from classes.
// 2. JavaScript allows dynamic modification of objects and classes at runtime, whereas Java has a static class structure.
// 3. JavaScript supports prototypal inheritance, which is different from the class-based inheritance in Java.

// Creating a Custom Class:

// Define a constructor function for the custom class
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an object from the custom class
  let person1 = new Person("John", 25);
  console.log("Person 1:", person1); // Output: Person { name: 'John', age: 25 }
  
  // Add a method to the custom class
  Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
  
  // Call the method on the object
  person1.greet(); // Output: Hello, my name is John
  
  // Creating Multiple Objects:
  
  // Create another object from the custom class
  let person2 = new Person("Alice", 30);
  console.log("Person 2:", person2); // Output: Person { name: 'Alice', age: 30 }
  
  // Call the method on the new object
  person2.greet(); // Output: Hello, my name is Alice
  
  // Custom Class with Inheritance:
  
  // Define a subclass using prototype chaining
  function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }
  
  // Set up prototype chaining for inheritance
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  // Add a method specific to the subclass
  Student.prototype.displayGrade = function () {
    console.log("Grade:", this.grade);
  };
  
  // Create an object from the subclass
  let student1 = new Student("Emma", 18, "A");
  console.log("Student 1:", student1); // Output: Student { name: 'Emma', age: 18, grade: 'A' }
  
  // Call methods from both the parent class and the subclass
  student1.greet(); // Output: Hello, my name is Emma
  student1.displayGrade(); // Output: Grade: A
  
  // JavaScript's prototype-based approach allows flexible object creation and inheritance.
  // By using constructor functions and prototypes, we can define custom classes and create objects with shared properties and methods.
  
  // That concludes our introduction to custom classes in JavaScript!
  // Stay tuned for the next file where we will dive deeper into the concepts of constructors in custom classes.
  