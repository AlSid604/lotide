// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else
//     return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(4 / 2, 6);

module.exports = eqArrays;
