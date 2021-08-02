/*
Have the function SearchingChallenge(str) take the str parameter being passed 
and find the longest palindromic substring, which means the longest substring 
which is read the same forwards as it is backwards. For example: if str is 
"abracecars" then you program should return the string racecar because it is 
the longest palindrome within the input string. 

The input will only contain lowercase alphabetic characters. The longest 
palindromic substring will always be unique, but if there is none that is
longer than 2 characters, return the string none.

Examples
    Input   : "hellosannasmith"
    Output  : sannas

    Input   : "abcdefgg"
    Output  : "none"
*/

function SearchingChallenge(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let palindrome = 1;

      for (let k = 0; k < j - i + 1; k++) {
        if (str[i + k] !== str[j - k]) {
          palindrome = 0;
        }
      }

      if (palindrome === 1 && str.slice(i, j).length > longest.length) {
        longest = str.slice(i, j + 1);
      }
    }
  }

  if (longest <= 2) {
    return "none";
  } else return longest;
}

console.log(SearchingChallenge("hellosannasmith")); //sannas
console.log(SearchingChallenge("abcdefgg")); //gg
console.log(SearchingChallenge("akuukasmuhhums")); //smuhhums
