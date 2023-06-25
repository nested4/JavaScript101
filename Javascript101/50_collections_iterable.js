// 51_collections_iterable.js

// Collections Continued: Iterable
// In this file, we will explore the concept of iteration in JavaScript and how to make collections iterable.

// Iterable Protocol:
// The Iterable protocol defines a standard way for an object to be iterable, allowing it to be looped over using the "for...of" loop or other iteration techniques.

// To make an object iterable, we need to implement the Symbol.iterator method, which returns an iterator object.

// Example:

const myIterable = {
    data: ['A', 'B', 'C'],
    [Symbol.iterator]() {
      let index = 0;
  
      return {
        next: () => {
          if (index < this.data.length) {
            return {
              value: this.data[index++],
              done: false,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    },
  };
  
  for (const item of myIterable) {
    console.log(item);
  }
  // Output:
  // A
  // B
  // C
  
  // Iterator Protocol:
  // The Iterator protocol defines a standard way for an object to produce a sequence of values. It must implement the next() method, which returns an object with the properties "value" and "done".
  
  // Example:
  
  const myIterator = {
    data: ['X', 'Y', 'Z'],
    next() {
      return {
        value: this.data.shift(),
        done: this.data.length === 0,
      };
    },
  };
  
  console.log(myIterator.next()); // Output: { value: 'X', done: false }
  console.log(myIterator.next()); // Output: { value: 'Y', done: false }
  console.log(myIterator.next()); // Output: { value: 'Z', done: false }
  console.log(myIterator.next()); // Output: { value: undefined, done: true }
  
  // Implementing Iterable and Iterator in Custom Collection:
  // We can implement the Iterable and Iterator protocols in our custom collection objects to make them iterable.
  
  class MyCollection {
    constructor() {
      this.data = [];
    }
  
    [Symbol.iterator]() {
      let index = 0;
  
      return {
        next: () => {
          if (index < this.data.length) {
            return {
              value: this.data[index++],
              done: false,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    }
  
    add(item) {
      this.data.push(item);
    }
  }
  
  const collection = new MyCollection();
  collection.add('Apple');
  collection.add('Banana');
  collection.add('Orange');
  
  for (const item of collection) {
    console.log(item);
  }
  // Output:
  // Apple
  // Banana
  // Orange
  
  // That concludes our exploration of making collections iterable in JavaScript!
  // Stay tuned for the next file where we will continue our journey through advanced collection manipulation techniques.
  
  