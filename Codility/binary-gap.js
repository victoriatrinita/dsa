/*
Title: Binary Gap
Difficulty: Easy
Link: // https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
*/

// Time complexity: O(n)
// Space complexity: O(n)

function solution(N) {
  let binaryRev = new Array();
  let binary = new Array();
  let curr = 0;
  let max = 0;

  // Convert to reversed binary
  for (let i = 0; N > 0; i++) {
    binaryRev[i] = N % 2;
    N = Math.floor(N / 2);
  }

  // Reverse reversed binary
  for (let i = binaryRev.length - 1; i >= 0; i--) {
    binary.push(binaryRev[i]);
  }

  // Find longest binary gap
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 0) {
      curr++;
    } else if (binary[i] === 1) {
      if (curr > max) {
        max = curr;
      }
      curr = 0;
    }
  }

  return max;
}
