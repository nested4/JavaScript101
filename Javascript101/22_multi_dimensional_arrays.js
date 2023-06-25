// multi_dimensional_arrays.js

// In this file, we will explore multi-dimensional arrays in JavaScript.

// Key Differences with Java:
// 1. JavaScript supports jagged arrays, where each row in a multi-dimensional array can have a different length.
//    In Java, multi-dimensional arrays have a fixed size for each dimension.
// 2. JavaScript uses nested arrays to represent multi-dimensional arrays, whereas Java uses arrays of arrays.

// Creating a Multi-Dimensional Array:

// Two-Dimensional Array:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix[0][0]); // Output: 1
  console.log(matrix[1][2]); // Output: 6
  console.log(matrix[2][1]); // Output: 8
  
  // Accessing Elements in a Multi-Dimensional Array:
  
  // Iterating through a Two-Dimensional Array:
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  
  // Modifying Elements in a Multi-Dimensional Array:
  
  matrix[1][1] = 10;
  console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
  
  // Adding and Removing Rows in a Multi-Dimensional Array:
  
  // Adding a Row:
  matrix.push([10, 11, 12]);
  console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9], [10, 11, 12]]
  
  // Removing a Row:
  matrix.pop();
  console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
  
  // Adding and Removing Elements in a Row:
  
  // Adding an Element:
  matrix[0].push(4);
  console.log(matrix); // Output: [[1, 2, 3, 4], [4, 10, 6], [7, 8, 9]]
  
  // Removing an Element:
  matrix[0].pop();
  console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
  
  // That covers the basics of multi-dimensional arrays in JavaScript!
  // Feel free to use this concept to represent and manipulate data in a multi-dimensional manner.
  
  