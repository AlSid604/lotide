// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else
//     return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };

// const findKeyByValue = function (obj, value) {
//   for (const objkey in obj) {
//     if (obj[objKey] === value) {
//       return objKey;
//     }
//   }
// };

const findKeyByValue = (obj, value) => {
  for (const objKey in obj) {
    if (obj[objKey] === value) {
      return objKey;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
