// 53_javascript_objects_json.js

// JavaScript Objects and JSON

// In this lesson, we will explore JavaScript objects and their manipulation, as well as the importance of JSON (JavaScript Object Notation) in API testing.

// Example 1: Creating and Manipulating Objects
let person = {
    name: "John",
    age: 30,
    profession: "QA Engineer",
  };
  
  console.log(person.name); // Accessing object properties
  person.age = 31; // Modifying object properties
  person.location = "New York"; // Adding new properties
  
  console.log(person); // Printing the modified object
  
  // Example 2: JSON (JavaScript Object Notation)
  let jsonPayload = `
  {
    "name": "John",
    "age": 30,
    "profession": "QA Engineer"
  }
  `;
  
  let parsedObject = JSON.parse(jsonPayload); // Parsing JSON string to JavaScript object
  console.log(parsedObject);
  
  let jsonString = JSON.stringify(parsedObject); // Converting JavaScript object to JSON string
  console.log(jsonString);
  
  // Key Differences between JavaScript and Java:
  // - JavaScript objects are more flexible and dynamic compared to Java objects.
  // - JavaScript objects can have properties added or modified at runtime.
  // - JSON (JavaScript Object Notation) is a lightweight data interchange format, commonly used in API testing for data transmission.
  
  // Understanding JavaScript objects and JSON is crucial for working with API responses and constructing test data for API testing.
  
  // Next, we will move on to Section 2: UI Testing with JavaScript.
  
  