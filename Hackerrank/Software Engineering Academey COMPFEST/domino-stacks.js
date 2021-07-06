/*
Title: Domino Stacks
Difficulty: Medium
Max Score: 100
Link: https://www.hackerrank.com/contests/software-engineering-academy-compfest/challenges/domino-stacks
*/

/* 
You are given a rectangular board of M × N squares. Also you are given an unlimited number of 
standard domino pieces of 2 × 1 squares. You are allowed to rotate the pieces. You are asked 
to place as many dominoes as possible on the board so as to meet the following conditions:

1. Each domino completely covers two squares.
2. No two dominoes overlap.
3. Each domino lies entirely inside the board. It is allowed to touch the edges of the board.

Find the maximum number of dominoes, which can be placed under these restrictions.

Input Format:
In a single line you are given two integers M and N — board sizes in squares (1 ≤ M ≤ N ≤ 16).

Example Input:
2 4

Constraints:
-

Output Format:
Output one number — the maximal number of dominoes, which can be placed.

Example Output:
4
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

function processData(m, n) {
  return Math.floor((m * n) / 2);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
  const m = parseInt(firstMultipleInput[0], 10);
  const n = parseInt(firstMultipleInput[1], 10);

  const result = processData(m, n);

  ws.write(result + "\n");

  ws.end();
}
