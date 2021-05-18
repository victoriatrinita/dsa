/*
Title: Credit Card Mask
Link: https://www.codewars.com/kata/5412509bd436bd33920011bc
*/

function maskify(cc) {
  let mask = cc.length - 4;
  if (mask >= 1) {
    let count = '#'.repeat(cc.slice(0, mask).length) + cc.slice(mask, cc.length);
    return count;
  } else return cc;
}
