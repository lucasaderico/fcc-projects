// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

function binarySearch(searchList, value) {
  const lo = 0;
  const hi = searchList.length - 1;
  let arrayPath = [];
  return bsPath(searchList, lo, hi, value, arrayPath);
}

function bsPath(arr, lo, hi, value, acc = []) {
  if (lo > hi) return "Value Not Found";

  const m = Math.floor(lo + (hi - lo) / 2);

  if (arr[m] === value) {
    acc.push(arr[m]);
    return acc;
  }

  if (value < arr[m]) {
    return bsPath(arr, lo, m - 1, value, [...acc, arr[m]]);
  }

  return bsPath(arr, m + 1, hi, value, [...acc, arr[m]]);
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

binarySearch(testArray, 70);
