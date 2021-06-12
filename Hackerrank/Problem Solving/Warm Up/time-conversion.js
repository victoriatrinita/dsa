/*
Title: Time Conversion
Difficulty: Easy
Max Score: 15
Link: https://www.hackerrank.com/challenges/time-conversion/problem
*/

// Solution 1

function timeConversion(s) {
  let time = s.slice(0, -2).split(":");
  let period = s.slice(-2);

  if (period === "PM" && time[0] !== "12") {
    time[0] = Number(time[0]) + 12;
  } else if (period === "AM" && time[0] === "12") {
    time[0] = "00";
  }
  return time.join(":");
}

// Solution 2
function timeConversion(s) {
  let time = s.slice(2, 8);
  let period = s.slice(-2);
  let hour = s.slice(0, 2);

  let hourConvert;
  if (period === "PM" && hour !== "12") {
    hourConvert = Number(hour) + 12;
    return `${hourConvert.toString()}${time}`;
  } else if (period === "AM" && hour === "12") {
    hourConvert = "00";
    return `${hourConvert.toString()}${time}`;
  } else {
    return s.slice(0, 8);
  }
}
