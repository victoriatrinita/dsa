/*
Title: Diagonal Difference
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

function diagonalDifference(arr) {
  let sumDiagLeft = 0, sumDiagRight = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDiagLeft += arr[i][i];
    sumDiagRight += arr[i][arr.length - 1 - i];
  }
  return Math.abs(sumDiagLeft - sumDiagRight);
}
