// 50_collections_continue.js

// Collections Continued
// In this file, we will continue our exploration of different collection types in JavaScript and delve into additional methods and functionalities they offer.

// 4. WeakSet:
// A WeakSet is a collection of weakly held objects. Unlike the Set, it allows only objects as values and does not prevent garbage collection of its elements.

// Example:

let obj1 = { name: 'John' };
let obj2 = { name: 'Jane' };

const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true

obj1 = null; // obj1 is no longer referenced
console.log(weakSet.has(obj1)); // Output: false

// 5. WeakMap:
// A WeakMap is a collection of key-value pairs where the keys are weakly held objects. Similar to WeakSet, it allows only objects as keys and does not prevent garbage collection of its entries.

// Example:

let key1 = { id: 1 };
let key2 = { id: 2 };
let value1 = 'Value 1';
let value2 = 'Value 2';

const weakMap = new WeakMap();
weakMap.set(key1, value1);
weakMap.set(key2, value2);

console.log(weakMap.get(key1)); // Output: Value 1

key1 = null; // key1 is no longer referenced
console.log(weakMap.get(key1)); // Output: undefined

// 6. Iterators and Generators:
// Iterators and generators are mechanisms in JavaScript that allow you to iterate over elements in a collection or generate a sequence of values.

// Example using Iterator:

const iterable = [1, 2, 3, 4, 5];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2

// Example using Generator:

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2

// These are just a few examples of additional collection types and functionalities available in JavaScript. There are many more techniques and methods to explore depending on your specific needs.

// It's important to study and understand the documentation for each collection type to leverage their full potential in your projects.

// That concludes our exploration of collections in JavaScript!
// Stay tuned for the next file where we will cover the concept of iteration and explore more advanced collection manipulation techniques.

