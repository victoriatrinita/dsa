/*
Title: Breaking the Records
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
*/

function breakingRecords(scores) {
  let worst = scores[0];
  let best = scores[0];
  let [breakHighest, breakLowest] = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < worst) {
      worst = scores[i];
      breakLowest++;
    } else if (scores[i] > best) {
      best = scores[i];
      breakHighest++;
    }
  }
  return [breakHighest, breakLowest];
}
