function findMissing(string) {
  let hashTable = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (const value of string) {
    hashTable[value] = true;
  }

  for (const value of alpha) {
    if (!hashTable[value]) {
      return value;
    }
  }
}

console.log(findMissing("the quick brown box jumps over a lazy dog"));
