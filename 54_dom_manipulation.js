// DOM Manipulation

// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the HTML elements as a tree-like structure, allowing JavaScript to interact with and manipulate them.

// In this file, we will explore DOM manipulation techniques using JavaScript, including handling Shadow DOM.

// Get Element by ID
const elementById = document.getElementById('myElement');
console.log(elementById);

// Get Elements by Class Name
const elementsByClass = document.getElementsByClassName('myClass');
console.log(elementsByClass);

// Get Elements by Tag Name
const elementsByTag = document.getElementsByTagName('div');
console.log(elementsByTag);

// Query Selector
const elementSelector = document.querySelector('.myClass');
console.log(elementSelector);

// Query Selector All
const elementsSelectorAll = document.querySelectorAll('.myClass');
console.log(elementsSelectorAll);

// Accessing Element Properties
const myElement = document.getElementById('myElement');

// Changing Text Content
myElement.textContent = 'Hello, World!';

// Changing HTML Content
myElement.innerHTML = '<h1>Hello, World!</h1>';

// Modifying Element Style
myElement.style.color = 'red';
myElement.style.fontSize = '20px';

// Adding and Removing CSS Classes
myElement.classList.add('highlight');
myElement.classList.remove('highlight');

// Adding Event Listeners
myElement.addEventListener('click', function() {
  console.log('Element clicked!');
});

// Removing Event Listeners
myElement.removeEventListener('click', function() {
  console.log('Element clicked!');
});

// Creating New Elements
const newElement = document.createElement('div');
newElement.textContent = 'New Element';

// Appending Elements
myElement.appendChild(newElement);

// Removing Elements
myElement.removeChild(newElement);

// Shadow DOM
// The Shadow DOM is a feature of the web platform that allows encapsulation of DOM elements and CSS styles.
// It provides a way to create and use self-contained components with their own styling and behavior.
// To work with Shadow DOM, you can use the shadowRoot property of an element to access its Shadow DOM root.
// For example:
const shadowHost = document.getElementById('myShadowHost');
const shadowRoot = shadowHost.shadowRoot;

// Once you have the shadowRoot, you can manipulate its content just like the regular DOM.

// Creating a Shadow DOM
const shadowHost1 = document.getElementById('myShadowHost');
const shadowRoot1 = shadowHost.attachShadow({ mode: 'open' });

// The attachShadow() method is used to attach a shadow root to the shadow host element.
// The mode option can be 'open' or 'closed', determining whether the shadow DOM is accessible from JavaScript or not.

// You can then manipulate the shadowRoot like the regular DOM to create and style elements within the shadow DOM.

// That concludes our exploration of DOM manipulation in JavaScript, including handling Shadow DOM!
// Feel free to experiment and explore further with different DOM manipulation techniques and Shadow DOM concepts.

