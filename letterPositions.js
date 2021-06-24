const countLetters = function (sentence) {
  const spacesOut = sentence.split(" ").join("");
  const count = {};
  // console.log(spacesOut);
  for (let i = 0; i < spacesOut.length; i++) {
    for (let x = 0; x < spacesOut[i][x]; x++) {
      console.log(spacesOut[i][x]);
    }

    if (count[spacesOut[i]]) {
      count[spacesOut[i]] += i;
    } else {
      count[spacesOut[i]] = i;
    }
  }
  console.log(count);
};







