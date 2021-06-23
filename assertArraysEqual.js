
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


const assertArraysEqual = function (array1, array2) {
  console.log(array1, array2)
  if (array1 === array2) {
    return `✅✅✅ Passed, These arrays contain the same values`;
  } 
  return `🛑🛑🛑 Failed, These arrays did not contain the same values`;
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


//console.log(eqArrays([1, 2, 3], [1, 3, 3]))
console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
