const assertEqual = require("../assertEqual");
const head = require("../head");
module.exports = assertEqual;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
