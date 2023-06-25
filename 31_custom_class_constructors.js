// 31_custom_class_constructors.js

// Custom Class: Constructors
// In this file, we will delve deeper into constructors in custom classes in JavaScript.

// Key Differences with Java:
// 1. JavaScript allows multiple constructors using different approaches, such as default parameter values or factory functions, whereas Java has a single constructor.
// 2. JavaScript does not have method overloading like Java, where multiple methods with the same name but different parameter lists can be defined.

// Constructor Functions:

// Define a constructor function for the custom class
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an object from the custom class
  let person1 = new Person("John", 25);
  console.log("Person 1:", person1); // Output: Person { name: 'John', age: 25 }
  
  // Default Parameter Values:
  
  // Define a constructor function with default parameter values
  function Book(title, author, year = 2021) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  // Create an object with default parameter values
  let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  console.log("Book 1:", book1); // Output: Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 2021 }
  
  // Create an object with a specified year
  let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  console.log("Book 2:", book2); // Output: Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  
  // Factory Functions:
  
  // Define a factory function to create objects
  function createCar(make, model, year) {
    let car = {};
    car.make = make;
    car.model = model;
    car.year = year;
    return car;
  }
  
  // Create an object using the factory function
  let car1 = createCar("Toyota", "Camry", 2022);
  console.log("Car 1:", car1); // Output: { make: 'Toyota', model: 'Camry', year: 2022 }
  
  // JavaScript provides flexibility in creating objects using constructors, default parameter values, and factory functions.
  // Constructors allow initialization of object properties, and different approaches can be used based on specific requirements.
  
  // That concludes our exploration of constructors in custom classes in JavaScript!
  // Stay tuned for the next file where we will continue with constructors and cover additional concepts.
  