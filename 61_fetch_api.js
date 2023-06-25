/**

// Fetch API in JavaScript

// The Fetch API provides a modern and flexible way to make HTTP requests.
// It supports both making requests and handling responses asynchronously.

// Making a GET request

fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

// The fetch function returns a Promise that resolves to the response of the request.
// We can chain .then() methods to handle the response and .catch() to handle any errors.

// The response.ok property indicates whether the request was successful (status code in the range of 200-299).
// If the response is successful, we can call response.json() to parse the response body as JSON.
// Otherwise, we throw an error with a descriptive message.

// Making a POST request

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', age: 30 }),
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

// Here, we're making a POST request by passing additional options in the fetch() function.
// We specify the method as 'POST', set the 'Content-Type' header to 'application/json',
// and provide the request body as a JSON string using JSON.stringify().

// The rest of the code follows the same pattern as the GET request for handling the response and errors.

// That concludes our overview of the Fetch API in JavaScript!


*/

// Fetch API in JavaScript

// Making a GET request

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

// Making a POST request

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Test Post', body: 'This is a test post.' }),
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

// Remember to replace the URL with a valid API endpoint in your own applications.

