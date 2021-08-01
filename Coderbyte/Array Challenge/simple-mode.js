/* 
Have the function ArrayChallenge(arr) take the array of numbers stored in arr 
and return the number that appears most frequently (the mode). For example: 
If arr contains [10,4,5,2,4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie.[5,10,10,6,5] should 
return 5 because it appeared first). If there is no mode return -1. The array 
will not be empty.

Examples
  Input   : [5,5,2,2,1]
  Output  : 5

  Input   : [3,4,1,6,10]
  Output  : -1
*/

function ArrayChallenge(arr) {
  let freq = {};

  arr.forEach((el) => {
    if (!(el in freq)) {
      freq[el] = 0;
    }
    freq[el]++;
  });

  let mode = -1;
  let modeFreq = 0;

  Object.entries(freq).forEach(([k, v]) => {
    if (mode !== -1) {
      if (v > modeFreq) {
        mode = k;
        modeFreq = v;
      }
      if (
        v === modeFreq &&
        arr.indexOf(parseInt(k)) < arr.indexOf(parseInt(mode))
      ) {
        mode = k;
        modeFreq = v;
      }
    } else {
      mode = k;
      modeFreq = v;
    }
  });

  if (modeFreq < 2) return -1;
  else return mode;
}

console.log(ArrayChallenge([3, 4, 1, 1, 1, 5, 5, 5, 5, 5, 2, 2, 1]));
console.log(ArrayChallenge([3, 3, 10, 10, 4, 4, 1, 6, 4, 10]));
console.log(ArrayChallenge([3, 10, 2]));
