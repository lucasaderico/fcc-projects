// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function qs(arr, lo, hi) {
  if (lo >= hi) return;

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);

  return arr;
}

function quickSort(array) {
  return qs(array, 0, array.length - 1);
}

quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
