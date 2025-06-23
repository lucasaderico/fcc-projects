// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets

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
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
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

  union(set) {
    const a = this.values();
    const b = set.values();
    const c = new Set();

    for (let i = 0; i < a.length; ++i) {
      c.add(a[i]);
    }

    for (let i = 0; i < b.length; ++i) {
      c.add(b[i]);
    }

    return c;
  }
}
