/*
Title: Sales by Match
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}
