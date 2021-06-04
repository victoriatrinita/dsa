/*
Title: 2D Array - DS
Difficulty: Easy
Max Score: 15
Link: https://www.hackerrank.com/challenges/2d-array/problem
*/

function hourglassSum(arr) {
  let sum = [];

  for (let i = 0; i + 2 < arr.length; i++) {
    let k = 0;
    while (k < 4) {
      let topGlass = arr[i].slice(k, k + 3);
      let midGlass = arr[i + 1][k + 1];
      let bottomGlass = arr[i + 2].slice(k, k + 3);
      let sumTopGlass = topGlass.reduce((acc, curr) => acc + curr);
      let sumBottomGlass = bottomGlass.reduce((acc, curr) => acc + curr);
      sum.push(sumTopGlass + midGlass + sumBottomGlass);
      k++;
    }
  }
  let max = Math.max(...sum);
  return max;
}
