const fs = require('fs');

// Asynchronous file read operation
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('File contents:', data);
});

// Synchronous file read operation
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err.message);
}
