const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

// const map = function() {
// }

const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    return `✅✅✅ Passed, These arrays contain the same values`;
  }
  return `🛑🛑🛑 Failed, These arrays did not contain the same values`;
};

