function head(arr1) {
  return arr1[0];
}
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");