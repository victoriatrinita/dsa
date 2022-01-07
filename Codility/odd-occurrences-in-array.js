/*
Title: Odd Occurrences In Array
Difficulty: Easy
Link: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
*/

// Solution 1
// Using object
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

// Solution 2
// Using Map
// Time complexity: O(n)
// Space complexity: O(n)

function solution(A) {
  let occurrences = new Map();
  let odd;

  A.forEach((el) => {
    if (!occurrences.has(el)) {
      occurrences.set(el, 0);
    }
    occurrences.set(el, occurrences.get(el) + 1);
  });

  // Using for in
  // for (let [k, v] of occurrences.entries()) {
  //   if (v % 2 !== 0) odd = k;
  // }

  // Using forEach
  occurrences.forEach((v, k) => {
    if (v % 2 !== 0) odd = k;
  });

  return odd;
}
