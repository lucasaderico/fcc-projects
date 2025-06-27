// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-hash-table

var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function () {
  this.collection = {};

  this.add = function (key, value) {
    const hashCode = hash(key);
    const bucket = this.collection[hashCode];

    if (bucket) {
      this.collection[hashCode].push([key, value]);
      return;
    }

    this.collection[hashCode] = [[key, value]];
  };

  this.remove = function (key) {
    const hashCode = hash(key);
    const bucket = this.collection[hashCode];

    if (!bucket) return;

    if (bucket.length === 1) {
      delete this.collection[hashCode];
      return;
    }

    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        break;
      }
    }
  };

  this.lookup = function (key) {
    const hashCode = hash(key);
    const bucket = this.collection[hashCode];

    if (!bucket) return null;

    let value = null;

    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        value = bucket[i][1];
        break;
      }
    }

    return value;
  };
};
