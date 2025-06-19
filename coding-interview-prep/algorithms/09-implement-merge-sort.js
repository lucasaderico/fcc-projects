// www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort

function merge(arr, left, middle, right) {
  const helper = [];
  for (let i = 0; i < arr.length; ++i) {
    helper[i] = arr[i];
  }

  let i = left;
  let j = middle + 1;
  let k = left;

  while (i <= middle && j <= right) {
    if (helper[i] <= helper[j]) {
      arr[k] = helper[i];
      i++;
    } else {
      arr[k] = helper[j];
      j++;
    }
    k++;
  }

  while (i <= middle) {
    arr[k] = helper[i];
    i++;
    k++;
  }

  while (j <= right) {
    arr[k] = helper[k];
    j++;
    k++;
  }

  return arr;
}

function ms(arr, left, right) {
  if (left >= right) return;

  const middle = Math.floor(left + (right - left) / 2);

  ms(arr, left, middle);
  ms(arr, middle + 1, right);

  merge(arr, left, middle, right);

  return arr;
}

function mergeSort(array) {
  return ms(array, 0, array.length - 1);
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
