/*
Title: Mini-Max Sum
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/mini-max-sum/problem
*/

// Solution 1
function miniMaxSum(arr) {
  let sorted = arr.sort();
  let min = sorted.slice(0, sorted.length - 1).reduce((acc, curr) => acc + curr);
  let max = sorted.slice(1, sorted.length).reduce((acc, curr) => acc + curr);
  console.log(min + " " + max);
}
