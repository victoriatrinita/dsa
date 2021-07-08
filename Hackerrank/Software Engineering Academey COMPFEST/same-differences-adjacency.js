/*
Title: Same Differences Adjacency
Difficulty: Medium
Max Score: 100
Link: https://www.hackerrank.com/contests/software-engineering-academy-compfest/challenges/same-differences-adjacency
*/

/*
You are given an array a of n integers. Count the number of pairs of indices (i,j) such that i

Input Format:
The first line contains one integer t (1≤t≤104). Then t test cases follow.
The first line of each test case contains one integer n (1≤n≤2⋅105).
The second line of each test case contains n integers a1,a2,…,an (1≤ai≤n) — array a.

Example Input:
4
6
3 5 1 4 6 6
3
1 2 3
4
1 3 3 4
6
1 6 3 4 5 6

Constraints:
There will be no test with 0 array.

Output Format:
For each test case output the number of pairs of indices (i,j) such that i < j and aj-ai=j-i. 

Example Output:
1
3
3
10
*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let _input = "";
let currentLine = 0;

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  _input = _input.split("\n");

  main();
});

function readLine() {
  return _input[currentLine++];
}

// Solution 1
function processData(t, n, ai) {
  let pairs = 0;
  let numberOfPairs = [];

  for (let i = 0; i < t; i++) {
    for (let j = 0; j < n[i]; j++) {
      for (let k = j + 1; k < n[i]; k++) {
        if (ai[i][k] - ai[i][j] === k - j) {
          pairs++;
        }
      }
    }
    numberOfPairs.push(pairs);
    pairs = 0;
  }

  return numberOfPairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  let ai = [];
  let n = [];

  for (let i = 0; i < t; i++) {
    const x = parseInt(readLine().trim(), 10);
    n.push(x);
    const m = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((aTemp) => parseInt(aTemp, 10));
    ai.push(m);
  }

  const result = processData(t, n, ai);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
