const express = require('express');
const app = express();

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Route handlers
app.get('/', (req, res) => {
  throw new Error('Oops! Something went wrong.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

/**Explanation:

This file demonstrates error handling in an Express.js application.
We require the express module and create an instance of the express application.
The app.use middleware is used to handle errors. It takes a callback function with four parameters: err, req, res, and next. Inside the callback, we log the error stack and send a response with a status code of 500 and a message "Something broke!".
The app.get route handler defines a GET route for the root path ("/"). In this handler, we intentionally throw an error to simulate an error occurring during the request.
Finally, we start the server and listen on port 3000.
To test the error handling, start the server by running the script with Node.js (node 65_error_handling_express.js). Then, open your browser and visit http://localhost:3000. You should see the error message "Something broke!" displayed in the browser, and the error stack trace logged in the console.

This demonstrates how Express.js handles errors and allows you to define custom error-handling middleware to handle different types of errors. */
