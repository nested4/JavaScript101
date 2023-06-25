// JavaScript File: 64_cookies.js

const http = require('http');

// Set a cookie
const setCookie = (name, value, expires, path = '/') => {
  const cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires.toUTCString()}; Path=${path}`;
  return cookie;
};

// Parse cookies from the request headers
const parseCookies = (cookieHeader) => {
  const cookies = {};
  if (cookieHeader) {
    const cookieArray = cookieHeader.split(';');
    for (const cookie of cookieArray) {
      const [name, value] = cookie.split('=').map((c) => c.trim());
      cookies[name] = decodeURIComponent(value);
    }
  }
  return cookies;
};

// Create a server
const server = http.createServer((req, res) => {
  // Set a cookie
  const expires = new Date('2023-01-01T12:00:00Z');
  res.setHeader('Set-Cookie', setCookie('username', 'John Doe', expires));

  // Parse cookies from the request
  const cookies = parseCookies(req.headers.cookie);

  // Log the cookies
  console.log(cookies);

  // Send a response
  res.end('Hello, cookies!');
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * The server is now listening on port 3000. You can interact with the server by sending HTTP requests to http://localhost:3000 from your browser or using tools like cURL or Postman.

When you access the server, it will set a cookie named "username" with the value "John Doe" and an expiration date of January 1, 2023. The server will then parse the cookies from the request headers and log them in the console.

To test the functionality, open your browser and visit http://localhost:3000. After accessing the URL, you should see the message "Server is listening on port 3000" in your terminal console.
 */