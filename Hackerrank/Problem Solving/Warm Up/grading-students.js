/*
Title: Grading Students
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/grading/problem
*/

// Solution 1
// forEach
function gradingStudents(grades) {
  grades.forEach((grade, i) => {
    let multipleOfFive = Math.ceil(grade / 5) * 5;

    if (grade < 38) {
      grades[i] = grade;
    } else if (multipleOfFive - grade < 3) {
      grades[i] = multipleOfFive;
    } else if (multipleOfFive - grade >= 3) {
      grades[i] = grade;
    }
  });
  return grades;
}

// Solution 2
// map
function gradingStudents(grades) {
  grades.map((grade, i) => {
    let multipleOfFive = Math.ceil(grade / 5) * 5;

    if (grade < 38) {
      grades[i] = grade;
    } else if (multipleOfFive - grade < 3) {
      grades[i] = multipleOfFive;
    } else if (multipleOfFive - grade >= 3) {
      grades[i] = grade;
    }
  });
  return grades;
}

// Solution 3
// for
function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let multipleOfFive = Math.ceil(grades[i] / 5) * 5;

    if (grades[i] < 38) {
      grades[i] = grades[i];
    } else if (multipleOfFive - grades[i] < 3) {
      grades[i] = multipleOfFive;
    } else if (multipleOfFive - grades[i] >= 3) {
      grades[i] = grades[i];
    }
  }
  return grades;
}
