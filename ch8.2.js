function getDuplicate(array) {
  let hashTable = {};
  for (const value of array) {
    if (hashTable[value]) {
      return value;
    } else {
      hashTable[value] = true;
    }
  }
}

console.log(getDuplicate(["a", "b", "b", "c", "d", "c", "e", "f"]));
