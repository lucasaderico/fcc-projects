// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

function pairwise(arr, arg) {
  const pairs = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (parseInt(arr[i]) + parseInt(arr[j]) === arg) {
        pairs.push(i, j);
        arr[j] = null;
        break;
      }
    }
  }
  return pairs.reduce((acc, curr) => acc + curr, 0);
}

pairwise([1, 4, 2, 3, 0, 5], 7);
