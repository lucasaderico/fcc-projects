// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function sym(...args) {
  let result = [];

  for (let i = 0; i < args.length; ++i) {
    if (i === 0) {
      result = twoSets(args[0], args[1]);
      i += 1;
    } else {
      result = twoSets(result, args[i]);
    }
  }
  return result.sort((a, b) => a - b);
}

function twoSets(a, b) {
  const c = Array.from(new Set(a.concat(b)));
  const d = [];

  for (let i = 0; i < c.length; ++i) {
    if (a.indexOf(c[i]) >= 0 && b.indexOf(c[i]) < 0) {
      d.push(c[i]);
    }
  }

  for (let i = 0; i < c.length; ++i) {
    if (b.indexOf(c[i]) >= 0 && a.indexOf(c[i]) < 0) {
      d.push(c[i]);
    }
  }
  return d;
}

sym([1, 2, 3], [5, 2, 1, 4]);
