function Findintersection(array2, array1) {
  let intersection = [];
  let hashTable = {};
  for (const value of array1) {
    // sets array1s values as keys to be in hashTable and its value is true
    hashTable[value] = true;
  }
  for (const value of array2) {
    // if hashTables value isnt true return false
    if (hashTable[value]) {
      intersection.push(value);
    }
  }
  return intersection;
}

console.log(Findintersection(["as", "b", "e"], ["a", "b", "c", "d", "e"]));
