/*
Title: Repeated String
Difficulty: Easy
Max Score: 20
Link: https://www.hackerrank.com/challenges/repeated-string/problem
*/

function repeatedString(s, n) {
  let aInString = 0;
  let totalA = 0;
  let remainder = n % s.length;
  let remainingA = 0;
  let repeats = Math.floor(n / s.length);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") aInString++;
  }

  if (remainder !== 0) {
    let remainingString = s.slice(0, remainder);
    for (let i = 0; i < remainingString.length; i++) {
      if (remainingString[i] === "a") remainingA++;
    }
  }

  totalA = aInString * repeats + remainingA;
  return totalA;
}
