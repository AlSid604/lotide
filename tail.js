function tail(arr1) {
  return arr1.slice(1);
}
const assertEqual = function (actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
