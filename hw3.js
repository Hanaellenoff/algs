function greatestNumber(array) {
  if (array.length === 0) {
    return null;
  }
  // Assume for now that i is the greatest:
  let g = array[0];
  // loop over array O(N)
  for (const i of array) {
    // compares each element in the array to the g current greatest
    if (i > g) {
      // if i is greater it updates g to be greatest
      g = i;
    }
  }
  return g;
}

console.log(greatestNumber([9, 92, 3, 4]));
