let things = ["apples", "baboons", "cribs", "dulcimers"];
for (const thing of things) {
  console.log(`Here's a thing: ${thing}`);
}

function isLeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  return year % 4 === 0;
}
console.log(isLeapYear(100));

function arraySum(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
}
console.log(arraySum([2, 1, 4]));
