// Iterative Solution
function factorialI(n) {
  let factorial = 1;
  if (n == 0 || n === 1) {
    return factorial;
  } else {
    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}

console.log(factorialI(4));

// Breakdown:
// n*n-1*n-2*n-3
// 1*1*2*3*4
// 1*1*....*n

// (+) Takes less memory than the recursive implementation
// (-) The code is lengthier than that of the recursive
//     implementation

// Recursive Solution
function factorialR(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialR(n - 1);
  }
}

console.log(factorialR(4));

// Breakdown:
// 4*factorial(3)
// 4*3*factorial(2)
// 4*3*2*factorial(1)
// 4*3*2*1

// (+) Shorter and cleaner code
// (-) Greater memory requirements as all the function calls
//     remain on the stack until the base case is reached
