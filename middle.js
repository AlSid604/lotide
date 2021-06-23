function middle(arr) {
  let middleValue = [];
  const arrayLength = arr.length;
  if (arrayLength % 2 === 1) {
    // testing if length is an odd number. Even will not have a remainder
    const middleIndex = (arr.length - 1) / 2;
    middleValue.push(arr[middleIndex]);
  } else {
    const secondPosition = arrayLength / 2;
    const firstPosition = secondPosition - 1;
    //middleValue.push(...[arr[firstPosition], arr[secondPosition]]);
    middleValue.push(arr[firstPosition]);
    middleValue.push(arr[secondPosition]);
  }

  console.log("middle::::", middleValue);
  return middleValue;
  // return arr1.slice()
}

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    return `✅✅✅ Passed, These arrays contain the same values`;
  }
  return `🛑🛑🛑 Failed, These arrays did not contain the same values`;
};

// [1, 2, 3, 4, 5, 6, 7][(22, 13, 11, 15, 18)]; // length = 7, middleValue = 4, middleIndex = 3, (7-1)/2 = 3 // length = 5 , middleValue = 11, middleIndex = 2 (5-1)/2 = 2
// middleValue = length
//[2, 3, 4, 5, 6, 7, 10, 23, 12, 90]
//[(22, 13, 11, 15, 18, 45, 55, 32)]; // length = 10, middleValues = (6, 7), middleIndex = (4, 5), middleValu // length = 8, middleValues =(15, 18), middleIndex=(3, 4)

const result = middle([4, 5, 6, 7, 10, 23, 12, 90]);

console.log("result:::::::", result);
