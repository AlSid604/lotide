const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (sentence) {
  const spacesOut = sentence.split(" ").join("");
  const count = {};
  // console.log(spacesOut);
  for (let i = 0; i < spacesOut.length; i++) {
    if (count[spacesOut[i]]) {
      count[spacesOut[i]] += i;
    } else {
      count[spacesOut[i]] = i;
    }
  }
  console.log(count);
};

countLetters("lighthouse in the house");
