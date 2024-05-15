// ### Exercise #4

// Write while loops to do the following:

// ```
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// ```
let i = 10;
while (i >= -0.5) {
  console.log(i);
  i -= 0.5;
}

// ```
// - Print all the odd numbers between 1 - 100.
// ```
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// ===============================================

let num = 1;
while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

// ```
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// ```
let n = 6;
let initial = 0;
let result = [];
while (initial < n) {
  initial++;
  result.push(`[${initial}]`);
}
console.log(result.join(" "));

// ```
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
// ```

let n2 = 5;
let result2 = 0;

for (let i = 0; i <= n2; i++) {
  result2 += i;
}
console.log(`sum:${result2}`);
