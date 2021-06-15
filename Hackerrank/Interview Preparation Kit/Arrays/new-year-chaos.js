/*
Title: Arrays: New Year Chaos
Difficulty: Medium
Max Score: 40
Link: https://www.hackerrank.com/challenges/new-year-chaos/problem
*/

// Solution 1
function minimumBribes(q) {
    let swaps = 0;

    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
             console.log(`Too chaotic`);
             return;
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (q.length > q[i]){
                q.length = q[i];
            } else if (q[i] != q.length){
                swaps++;
            }
        }
    }

    console.log(swaps);
}
