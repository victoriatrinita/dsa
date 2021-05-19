/*
Title: Compare the Triplets
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

function compareTriplets(a, b) {
  let score = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (b[i] > a[i]) {
      score[1] += 1;
    }
  }
  return score;
}
