/*
Title: Arrays: Left Rotation
Difficulty: Easy
Max Score: 20
Link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
*/

function rotLeft(a, d) {
  let rotated = [];
  for (let i = 0; i < a.length; i++) {
    // calculate (i-d)%(a.length)
    // modulo for negative nums workaround
    // which is not built in JS
    let k = modulo(i - d, a.length);
    rotated[k] = a[i];
  }
  return rotated;
}

function modulo(n, m) {
  return ((n % m) + m) % m;
}
