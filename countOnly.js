const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const finalPeices = {};
  console.log(itemsToCount);
  console.log(allItems);
  for (const item of allItems) {
    if (itemsToCount[item]) {
      console.log(item);
      console.log(finalPeices[item]);
      if (finalPeices[item]) {
        finalPeices[item] += 1;
      } else {
        finalPeices[item] = 1;
      }
    }
  }
  return finalPeices;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);












