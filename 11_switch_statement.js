// Switch Statement

// In this file, we will explore the switch statement in JavaScript.

// The switch statement provides a way to perform different actions based on different conditions.

let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
    break;
}

console.log("The day is:", dayName);

// The switch statement evaluates an expression and matches its value to one of the specified case labels.
// If a match is found, the corresponding block of code is executed.
// The break statement is used to exit the switch statement once a match is found.
// If no match is found, the code block under the default label is executed.

// That concludes our exploration of the switch statement in JavaScript!
// Stay tuned for the next file where we will cover more concepts and operators.

