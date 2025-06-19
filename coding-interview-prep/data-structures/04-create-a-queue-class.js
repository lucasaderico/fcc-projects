// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (value) {
    collection.push(value);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}
