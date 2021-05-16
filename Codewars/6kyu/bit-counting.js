/*
Title: Bit Counting
Link: https://www.codewars.com/kata/526571aae218b8ee490006f4
*/

var countBits = function (n) {
  bits = n.toString(2);
  arrayBits = Array.from(bits);
  ones = arrayBits.filter((x) => x === '1');
  return ones.length;
};
