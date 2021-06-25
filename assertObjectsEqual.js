const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); // Returns array of the object 1's keys
  const keys2 = Object.keys(object2); // Returns array of the object 2's keys

  // compare lengths of two keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // iterate through array of keys
  for (const key of keys1) {
    const key1 = object1[key]; // key 1 is the element of keys
    const key2 = object2[key]; //key 2 is the element of keys2
    if (Array.isArray(key1)) {
      if (!eqArrays(key1, key2)) {
        //if key1 !== key 2 according to eq arrays
        return false;
      }
      continue;
    }

    // if the above condition is false
    if (key1 !== key2) {
      return false;
    }
  }

  // if it passes the tests above, it must be true
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else
    return console.log(
      `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false
