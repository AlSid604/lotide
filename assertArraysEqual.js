// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require("./eqArrays");

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Passed : These arrays have the same value`);
  } else
    console.log(`🛑🛑🛑 Failed, These arrays did not contain the same values`);
};

module.exports = assertArraysEqual;

// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
