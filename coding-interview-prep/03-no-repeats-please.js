// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

function permAlone(str) {
  if (str.length === 1) return 1;
  const arr = perm(str);
  return hasConsecutivesRepeatedLetters(arr).length;
}

function perm(str) {
  if (str === "") return;
  if (str.length === 1) return str;
  const result = [];

  for (let i = 0; i < str.length; ++i) {
    const curr = str[i];
    const remain = str.slice(0, i) + str.slice(i + 1);
    const permRemain = perm(remain);

    for (let j = 0; j < permRemain.length; ++j) {
      const permStr = curr + permRemain[j];
      result.push(permStr);
    }
  }
  return result;
}

function hasConsecutivesRepeatedLetters(arr) {
  const regex = /([a-zA-Z])\1/;
  return arr.filter((e) => !regex.test(e));
}

permAlone("aab");
