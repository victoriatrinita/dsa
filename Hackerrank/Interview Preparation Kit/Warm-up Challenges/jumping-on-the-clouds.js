/*
Title: Jumping on the Clouds
Difficulty: Easy
Max Score: 20
Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

// Solution 1
function jumpingOnClouds(c) {
  let i = 0;
  let jump = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      jump++;
      i += 2;
    } else if (c[i + 1] === 0) {
      jump++;
      i++;
    }
  }
  return jump;
}

// Solution 2
function jumpingOnClouds(c) {
  let i = 0;
  let jump = 0;
  while (i < c.length - 1) {
    if (c[i + 1] === 0) {
      if (c[i + 2] === 0) {
        jump++;
        i += 2;
      } else {
        jump++;
        i++;
      }
    } else {
      jump++;
      i += 2;
    }
  }
  return jump;
}
