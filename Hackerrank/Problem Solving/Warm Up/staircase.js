/*
Title: Staircase
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/staircase/problem
*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
