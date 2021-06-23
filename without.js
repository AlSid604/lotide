const eqArrays = function (array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2) && array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const without = function (array1, array2) {
  let arrayFinal = array1;
  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      if (array2[i] === arrayFinal[x]) {
        arrayFinal.splice(x, 1);
      }
    }
  }
  return arrayFinal;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("These arrays have equal values.")
  } else {
    console.log("The values are not equal.")
  }
}



assertArraysEqual(without([ '1', '2', '3' ], [ 1, 2, '3' ]), ["1", "2"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"])





