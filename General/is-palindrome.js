function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// output: true
console.log(isPalindrome("eye"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("racEcAr"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("never odd or even"));
console.log(isPalindrome("0_0 (: /- :) 0–0"));

// output: false
console.log(isPalindrome("1 eye for of 1 eye."));
console.log(isPalindrome("not a palindrome"));
