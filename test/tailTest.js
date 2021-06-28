const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

assertArraysEqual(tail([5, 6, 7]), [6, 7]);
console.log(tail([5, 6, 7]));
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
