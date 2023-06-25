// Parsing JSON
const jsonString = '{"name":"John Doe","age":30,"city":"New York"}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

// Converting JavaScript object to JSON string
const person = {
  name: 'Jane Smith',
  age: 25,
  city: 'San Francisco'
};
const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson);

// Modifying JavaScript object
person.age = 26;
person.city = 'Los Angeles';
console.log(person);

// Parsing JSON with reviver function
const jsonString2 = '{"name":"John Doe","age":30,"city":"New York"}';

// Reviver function to modify parsed object
const reviver = (key, value) => {
  if (key === 'age') {
    return value + 1;
  }
  return value;
};

const parsedObject2 = JSON.parse(jsonString2, reviver);
console.log(parsedObject2);

/** This file demonstrates the following:

Parsing a JSON string using JSON.parse().
Converting a JavaScript object to a JSON string using JSON.stringify().
Modifying a JavaScript object and observing the changes.
Parsing JSON with a reviver function that allows modifying the parsed object during parsing.
Each code snippet is accompanied by comments explaining the code's purpose and functionality.*/