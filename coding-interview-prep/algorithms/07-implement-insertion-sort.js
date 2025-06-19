// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

function insertionSort(array) {
  for (let i = 0; i < array.length; ++i) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j--;
    }
  }
  return array;
}

insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
