// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

function selectionSort(array) {
  for (let i = 0; i < array.length; ++i) {
    let idx = i;
    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < array[idx]) {
        idx = j;
      }
    }
    const tmp = array[i];
    array[i] = array[idx];
    array[idx] = tmp;
  }
  return array;
}

selectionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
