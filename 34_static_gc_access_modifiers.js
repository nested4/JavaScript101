// 35_static_gc_access_modifiers.js

// Static Continued, Garbage Collection, Access Modifiers
// In this file, we will continue our exploration of static members and discuss garbage collection and access modifiers in JavaScript.

// Static Members Recap:
// - Static members are defined directly on the constructor function.
// - They are shared among all instances of the class.
// - Static methods can only access other static members and cannot access instance-specific members.

// Garbage Collection:
// JavaScript uses automatic garbage collection to reclaim memory occupied by objects that are no longer in use.
// Developers do not need to explicitly free memory as in languages like C++.

// Access Modifiers:
// JavaScript does not have built-in access modifiers like Java's private, public, and protected.
// However, developers can use naming conventions and closure patterns to achieve encapsulation and data hiding.

// Example demonstrating access modifiers using naming conventions:
function Person(name, age) {
    // Public properties
    this.name = name;
    this.age = age;
  
    // Private property (convention: prefix with underscore)
    var _ssn = "123-45-6789";
  
    // Public method
    this.getSSN = function () {
      return _ssn;
    };
  }
  
  // Create a person object
  var person = new Person("John", 30);
  
  console.log("Name:", person.name); // Output: John
  console.log("Age:", person.age); // Output: 30
  console.log("SSN:", person.getSSN()); // Output: 123-45-6789
  
  // Note: The _ssn property is conventionally considered private and should not be accessed directly.
  
  // Additional Concepts:
  
  // - JavaScript's garbage collector automatically determines when an object is no longer needed and frees up memory.
  // - Closures can be used to create private variables and encapsulate data within a function scope.
  // - Developers can use naming conventions, like prefixing properties with an underscore (_), to indicate intended privacy.
  
  // That concludes our exploration of static members, garbage collection, and access modifiers in JavaScript!
  // Stay tuned for the next file where we will cover OOP encapsulation in JavaScript.
  
  