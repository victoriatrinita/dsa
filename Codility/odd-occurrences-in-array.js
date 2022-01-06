/*
Title: Odd Occurrences In Array
Difficulty: Easy
Link: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
*/

// Solution 1
// Time complexity: O(n)
// Space complexity: O(n)

function solution(A) {
  let occurrences = {};
  let odd;

  A.forEach((el) => {
    if (!(el in occurrences)) {
      occurrences[el] = 0;
    }
    occurrences[el] = occurrences[el] + 1;
  });

  Object.entries(occurrences).forEach(([k, v]) => {
    if (v % 2 !== 0) {
      odd = parseInt(k);
    }
  });
  return odd;
}
