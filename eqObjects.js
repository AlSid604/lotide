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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
