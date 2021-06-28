const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../assertArraysEqual");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
