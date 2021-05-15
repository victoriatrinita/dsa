/*
Title: Who likes it?
Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
*/

// Solution 1
function likes(names) {
  if (names.length !== 0) {
    if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    }
  } else return "no one likes this";
}

// Solution 2
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this");
  }
}
