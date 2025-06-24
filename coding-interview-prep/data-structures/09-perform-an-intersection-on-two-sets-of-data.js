// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }

  intersection(set) {
    const a = this.values();
    const b = set.values();
    const c = new Set();
    const obj = {};

    for (let i = 0; i < a.length; ++i) {
      obj[a[i]] ? (obj[a[i]] += 1) : (obj[a[i]] = 1);
    }

    for (let i = 0; i < b.length; ++i) {
      obj[b[i]] ? (obj[b[i]] += 1) : (obj[b[i]] = 1);
    }

    const keys = Object.keys(obj);

    keys.forEach((e) => {
      if (obj[e] > 1) {
        c.add(e);
      }
    });

    return c;
  }
}
