// Iterative
// Time complexity: O(n^2)
// Space complexity: O(n)

function powI(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
}

console.log(powI(2, 0));
console.log(powI(2, 3));
console.log(powI(2, 5));

// Recursive
// Time complexity: O(n)
// Space complexity: O(n)

function powR(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * powR(base, power - 1);
  }
}

console.log(powR(2, 0));
console.log(powR(2, 3));
console.log(powR(2, 5));

// Recursive
// Time complexity: O(log n)
// Space complexity: O(n)

function powR2(base, power) {
  if (power === 0) {
    return 1;
  } else if (power % 2 === 0) {
    return powR2(base, power / 2) * powR2(base, power / 2);
  } else {
    return base * powR2(base, power - 1);
  }
}

console.log(powR2(2, 0));
console.log(powR2(2, 3));
console.log(powR2(2, 5));
console.log(powR2(2, 12));
