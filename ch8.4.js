function findNonDuplicate(string) {
  let hashTable = {};
  for (const char of string) {
    if (hashTable[char]) {
      hashTable[char] += 1;
    } else {
      hashTable[char] = 1;
    }
  }

  for (const char of string) {
    if (hashTable[char] === 1) {
      return char;
    }
  }
}

console.log(findNonDuplicate("minimum"));
