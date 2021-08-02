/*
Have the function ArrayChallenge(arr) take the str parameter and determine
how many anagrams exist in the string. An anagram is a new word that is
produced from rearranging the characters in a different word, for example:
cars and arcs are anagrams. Your program should determine how many anagrams
exist in a given string and return the total number. For example: if str
is "cars are very cool so are arcs and my os" then your program should
return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a
2nd anagram. The word "are" occurs twice in the string but it isn't an 
anagram because it is the same word just repeated. The string will contain
only spaces and lowercase letters, no punctuation, numbers, or uppercase 
letters.

Examples
  Input   : "aa aa odg dog gdo"
  Output  : 2
  
  Input   : "a c b c run urn urn"
  Output  : 1
*/

function ArrayChallenge(str) {
  let words = str.split(" ");
  let occurrences = {};
  let anagram = 0;

  words = words.map((e) => e.split("").sort().join(""));
  // words.forEach((el, i) => words[i] = el.split("").sort().join(""));

  words.forEach((el) => {
    if (!(el in occurrences)) {
      occurrences[el] = 0;
    }
    occurrences[el]++;
  });

  Object.entries(occurrences).forEach(([k, v]) => {
    if (v >= 2 && k.length > 1) anagram++;
  });

  return anagram;
}

console.log(ArrayChallenge("aa aa odg dog gdo")); //2
console.log(ArrayChallenge("a c b c run urn urn")); //1
console.log(ArrayChallenge("aku kau kita kua auk nomo omon oomn")); //2
