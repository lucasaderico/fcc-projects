// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; ++i) {
    obj[arr1[i][1]] = arr1[i][0];
  }

  for (let i = 0; i < arr2.length; ++i) {
    if (obj.hasOwnProperty(arr2[i][1])) {
      obj[arr2[i][1]] += arr2[i][0];
    } else {
      obj[arr2[i][1]] = arr2[i][0];
    }
  }

  const sorted = [];

  for (const p in obj) {
    sorted.push(p);
  }

  sorted.sort();

  arr1 = [];

  for (let i = 0; i < sorted.length; ++i) {
    arr1.push([obj[sorted[i]], sorted[i]]);
  }

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
