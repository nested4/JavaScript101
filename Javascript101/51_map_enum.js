// 51_map_intro_enum.js

// Map Introduction and Enum
// In this file, we will explore the Map data structure in JavaScript and introduce the concept of enums.

// Map:
// A Map is a built-in data structure in JavaScript that allows you to store key-value pairs. Unlike an object, a Map can use any data type as the key.

// Creating a Map:

const map = new Map();

// Adding Key-Value Pairs:

map.set('name', 'John');
map.set('age', 30);
map.set(1, 'one');

// Accessing Values:

console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 30
console.log(map.get(1)); // Output: one

// Checking if a Key Exists:

console.log(map.has('name')); // Output: true
console.log(map.has('city')); // Output: false

// Removing a Key-Value Pair:

map.delete('age');

// Size of the Map:

console.log(map.size); // Output: 2

// Iterating over the Map:

for (const [key, value] of map) {
  console.log(key, value);
}
// Output:
// name John
// 1 one

// Enum:
// In JavaScript, there is no built-in support for enums like in Java. However, you can create a similar effect using objects or Map.

// Example:

const DaysOfWeek = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday',
};

console.log(DaysOfWeek.MONDAY); // Output: Monday

// Enum Using Map:

const Weekdays = new Map([
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
]);

console.log(Weekdays.get(1)); // Output: Monday

// That concludes our introduction to the Map data structure and enums in JavaScript!
// Stay tuned for the next file where we will dive deeper into functional programming concepts and explore functional interfaces and lambdas.

