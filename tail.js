function tail(arr1) {
  return arr1.slice(1);
}
//  const assertEqual = function (actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] === expected[i]) {
//       console.log(`✅✅✅Assertion Passed: ${actual[i]} === ${expected[i]}`);
//     } else {
//       return console.log(
//         `🛑🛑🛑Assertion Failed: ${actual[i]} !== ${expected[i]}`
//       );
//     }
//   }
// };
const assertEqual = function(actual, expected) {
  return actual === expected;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));

assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
