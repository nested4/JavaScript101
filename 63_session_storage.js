// JavaScript File: 63_session_storage.js

// Session Storage Example

// Storing data in session storage
sessionStorage.setItem('name', 'John Doe');
sessionStorage.setItem('age', '30');

// Retrieving data from session storage
const name = sessionStorage.getItem('name');
const age = sessionStorage.getItem('age');

console.log('Name:', name);
console.log('Age:', age);

// Removing data from session storage
sessionStorage.removeItem('age');

// Clearing session storage
sessionStorage.clear();

// Checking if data exists in session storage
const isNameSet = sessionStorage.getItem('name') !== null;
console.log('Is Name set:', isNameSet);

// Explanation:
// - The code demonstrates the usage of session storage in JavaScript.
// - Session storage allows you to store key-value pairs in the browser's session storage.
// - The `sessionStorage.setItem()` method is used to store data in session storage. In this example, we store the name as `'John Doe'` and the age as `'30'`.
// - To retrieve data from session storage, we use the `sessionStorage.getItem()` method. Here, we retrieve the name and age values and assign them to the variables `name` and `age`.
// - The retrieved data is then logged to the console using `console.log()`.
// - To remove specific data from session storage, we use the `sessionStorage.removeItem()` method. In this case, we remove the age from session storage.
// - The `sessionStorage.clear()` method is used to clear all data from session storage.
// - Finally, we check if the name data is still set in session storage by using the `sessionStorage.getItem()` method and comparing it to `null`. The result is logged to the console.

/**The code I provided for the 63_session_storage.js file is intended to be executed in a web browser environment where sessionStorage is available. However, when running the code with Node.js, sessionStorage is not defined because it is specific to web browsers.

If you want to work with web browser-specific APIs like sessionStorage, you would need to execute the code in a web browser environment, such as using the browser's developer console or creating an HTML file with a <script> tag that includes the JavaScript code. */ 
