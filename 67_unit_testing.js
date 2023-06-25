function sum(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // Unit tests using the assert module
  const assert = require('assert');
  
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(subtract(5, 2), 3, '5 - 2 should equal 3');
  
  // Additional test cases
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(subtract(10, 5), 5, '10 - 5 should equal 5');
  
  console.log('All tests passed!');
  /**This file demonstrates how to write unit tests in JavaScript using the assert module, which is built into Node.js. 
   * The sum and subtract functions are tested using the assert.strictEqual method, which verifies if the actual output 
   * matches the expected output. If any test fails, an error message is displayed.

To run this file, execute it using Node.js. You should see the output "All tests passed!" if all the assertions are successful. 
   */
  