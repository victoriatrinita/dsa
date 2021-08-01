/* 
Have the function StringChallenge(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the 
strinng with the letter following it in the alphabet (ie. c becomes d, z 
becomes a). Then capitalize every vowel in this new string (a,e,i,o,u) and 
finally return this modified string.

Examples
  Input   : "hello*3"
  Output  : Ifmmp*3

  Input   : "fun times!"
  Output  : gvO Ujnft!
*/

function StringChallenge(str) {
  return str
    .replace(/[a-zA-Z]/g, (el) => String.fromCharCode(el.charCodeAt(0) + 1))
    .replace(/[a,i,o,u,e]/g, (el) => el.toUpperCase());
}

console.log(StringChallenge("hello*3")); //Ifmmp*3
console.log(StringChallenge("fun times!")); //gvO Ujnft!
