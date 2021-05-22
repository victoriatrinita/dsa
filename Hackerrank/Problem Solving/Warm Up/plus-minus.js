/*
Title: Plus Minus
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/plus-minus/problem
*/

function plusMinus(arr) {
  let positive = 0, negative = 0, zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] === 0) {
      zero += 1;
    } else {
      positive += 1;
    }
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
