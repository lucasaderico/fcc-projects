// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.push = function (value) {
    collection.push(value);
  };

  this.pop = function () {
    return collection.pop();
  };

  this.peek = function () {
    const len = collection.length;
    return collection[len - 1];
  };

  this.isEmpty = function () {
    const len = collection.length;
    return len === 0;
  };

  this.clear = function () {
    return (collection = []);
  };
}
