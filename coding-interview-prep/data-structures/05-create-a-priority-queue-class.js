// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };

  this.enqueue = function (value) {
    let idx = this.collection.length;
    for (let i = this.collection.length - 1; i >= 0; --i) {
      if (this.collection[i][1] <= value[1]) break;
      idx = i;
    }
    this.collection.splice(idx, 0, value);
  };

  this.dequeue = function () {
    return this.collection.shift()[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };

  this.front = function () {
    return this.isEmpty() ? null : this.collection[0][0];
  };
}
