// binary search
var nums = [-1, 0, 3, 5, 9, 12];

function searchTarget(nums, target) {
  var upperIndex = nums.length - 1;
  var lowerIndex = 0;
  while (lowerIndex <= upperIndex) {
    // finds middle index of the array
    var midIndex = (upperIndex + lowerIndex) / 2;
    var midIndex2 = Math.floor(midIndex);
    // reading the value of the arrays middle
    var midVal = nums[midIndex2];
    if (midVal < target) {
      // make the upper index equal to midval - 1
      upperIndex = midIndex2 - 1;
    } else if (midVal > target) {
      // make lower index equal to midval + 1
      lowerIndex = midIndex2 + 1;
    } else {
      // if target is equal to midindex's value
      return midIndex2;
    }
  }
  // if not found will return -1
  return -1;
}

var target = 9;
console.log(searchTarget(nums, target));
