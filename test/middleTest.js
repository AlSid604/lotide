const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([4, 5, 6, 7, 23, 12, 90]), [7, 10]);
assertArraysEqual(middle([1]), []);
