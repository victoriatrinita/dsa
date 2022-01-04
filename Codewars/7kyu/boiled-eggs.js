/*
Title: Boiled Eggs
Link: https://www.codewars.com/kata/52b5247074ea613a09000164
*/

// Time complexity: O(1)
// Space complexity: O(1)

function cookingTime(eggs) {
  if (eggs === 0) return 0;
  if (eggs % 8 === 0) return (eggs / 8) * 5;
  else return Math.floor(eggs / 8) * 5 + 5;
}
