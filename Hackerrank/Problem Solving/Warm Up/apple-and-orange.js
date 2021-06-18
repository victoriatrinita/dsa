/*
Title: Apple and Orange
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/apple-and-orange/problem
*/

// Solution 1
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let resultApples = apples
    .map((x) => x + a)
    .filter((el) => el >= s && el <= t);
  let resultOranges = oranges
    .map((x) => x + b)
    .filter((el) => el >= s && el <= t);
  console.log(resultApples.length);
  console.log(resultOranges.length);
}

// Solution 2
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter((el) => el + a >= s && el + a <= t).length);
  console.log(oranges.filter((el) => el + b >= s && el + b <= t).length);
}
