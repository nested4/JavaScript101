// 33_custom_class_constructors.js

// Custom Class: Constructors Continued
// In this file, we will further explore constructors in custom classes in JavaScript.

// Key Differences with Java:
// 1. JavaScript does not have a separate destructor concept like Java's finalize() method. JavaScript uses garbage collection to manage memory.
// 2. JavaScript constructors are regular functions that are invoked using the "new" keyword, while Java constructors are invoked implicitly when creating objects.
// 3. JavaScript constructors can be defined in the prototype of the custom class, whereas Java constructors are defined as part of the class declaration.

// Prototype Constructors:

// Define a constructor function in the prototype of the custom class
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  Product.prototype.display = function () {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  };
  
  // Create an object from the custom class
  let product1 = new Product("Laptop", 999);
  product1.display(); // Output: Product: Laptop, Price: $999
  
  // Inheritance and Super Constructors:
  
  // Define a parent class with a constructor
  function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Define a child class that extends the parent class
  function Car(make, model, year) {
    Vehicle.call(this, make, model); // Invoke the parent constructor using "call" and pass current object as the context
    this.year = year;
  }
  
  // Create an object from the child class
  let car1 = new Car("Toyota", "Camry", 2022);
  console.log("Car 1:", car1); // Output: Car { make: 'Toyota', model: 'Camry', year: 2022 }
  
  // Additional Concepts:
  
  // - JavaScript allows for the use of constructor chaining, where a constructor can invoke another constructor using the "call" or "apply" methods.
  // - JavaScript provides the "instanceof" operator to check if an object is an instance of a specific class.
  // - JavaScript has no concept of private constructors or constructor visibility modifiers like Java.
  
  // JavaScript's approach to constructors offers flexibility and allows for prototype-based inheritance and constructor chaining.
  
  // That concludes our exploration of constructors in custom classes in JavaScript!
  // Stay tuned for the next file where we will cover static members and access modifiers in custom classes.
  
  