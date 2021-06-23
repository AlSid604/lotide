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

const without = function (source, itemToRemove) {
  let arrayFinal = [];
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemToRemove.length; x++) {
      if (source[i] !== itemToRemove[x]) {
        arrayFinal.push(source[i]);
      }
    }
  }
  return arrayFinal;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("These arrays have equal values.");
  } else {
    console.log("The values are not equal.");
  }
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
