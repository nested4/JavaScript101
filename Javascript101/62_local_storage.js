// Local Storage in JavaScript

// Setting data in local storage
localStorage.setItem('name', 'John Doe');
localStorage.setItem('age', '30');

// Getting data from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name); // Output: John Doe
console.log(age); // Output: 30

// Updating data in local storage
localStorage.setItem('age', '35');

const updatedAge = localStorage.getItem('age');
console.log(updatedAge); // Output: 35

// Removing data from local storage
localStorage.removeItem('name');

const removedName = localStorage.getItem('name');
console.log(removedName); // Output: null

// Clearing the entire local storage
localStorage.clear();

const clearedAge = localStorage.getItem('age');
console.log(clearedAge); // Output: null

/**
 * The Local Storage feature is not available in Node.js because it is specific to web browsers. It allows web applications to store data on the client-side.

To run and test the Local Storage code, you'll need to execute it in a browser environment like a web page or an HTML file. The code won't work in a Node.js environment.

If you have a web browser installed, you can create an HTML file and include the JavaScript code within the <script> tags. Then open the HTML file in your browser to see the Local Storage functionality in action.

 */