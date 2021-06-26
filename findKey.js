const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const isValueEqualToTwo = function (key) {
  if (key.stars === 2) {
    return true;
  }
};

const findKey = function (obj, callBack) {
  //loop over the keys in the outter object
  // run the callback on the value of the key and check
  for (const [key, value] of Object.entries(obj)) {
    // THE REASON WE MAKE IT AN ARRAY IS TO BE ABLE TO LOOP OVER THE KEYS - VALUE // object.entires(obj) is creating an array of every entry for that purpose
    // once we are able to itterate over the keys we can individually test weither they meet the conditions of the callback
    // if condition passes it will pass the result(True/false) to the varaible we made called hasPassedTest
    //lastly return that key if it passes the test
    // if it does not pass the test it will re itterate until finds true ( our conditon)
    let hasPassedTest = callBack(value);
    if (hasPassedTest === true) {
      return key;
    }
  }
};
const starRatings = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
console.log(findKey(starRatings, isValueEqualToTwo)); // => "noma"
