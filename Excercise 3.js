// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let c = 0; c < i; c++) {
    row += "*";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// ### Exercise #4

// Write while loops to do the following:

// ```
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// ```

// ```
// - Print all the odd numbers between 1 - 100.
// ```

// ```
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// ```

// ```
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
// ```
