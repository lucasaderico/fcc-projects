// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

function bubbleSort(array) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1 - i; ++j) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}
