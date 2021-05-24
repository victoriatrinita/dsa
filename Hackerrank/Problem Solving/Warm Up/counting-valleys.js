/*
Title: Counting Valleys
Difficulty: Easy
Max Score: 15
Link: https://www.hackerrank.com/challenges/counting-valleys/problem
*/

// Solution 1
function countingValleys(steps, path) {
  let current = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      current++;
    } else if (path[i] === "D") {
      current--;
      if (current === -1) {
        valleys++;
      }
    }
  }
  return valleys;
}

// Solution 2
function countingValleys(steps, path) {
  let current = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      current++;
      if (current === 0) {
        valleys++;
      }
    } else if (path[i] === "D") {
      current--;
    }
  }
  return valleys;
}
