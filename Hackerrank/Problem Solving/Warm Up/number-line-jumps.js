/*
Title: Number Line Jumps
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/kangaroo/problem
*/

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2 && (x1 - x2) % (v2 - v1) === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
