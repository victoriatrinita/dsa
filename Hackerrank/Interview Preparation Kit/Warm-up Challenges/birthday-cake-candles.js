/*
Title: Birthday Cake Candles
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

// Solution 1
function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }

  return count;
}

// Solution 2

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let maxCount = candles.filter(el => el === max)
    
    return maxCount.length;
  }
  