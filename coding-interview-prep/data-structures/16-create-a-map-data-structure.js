// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-map-data-structure

var Map = function () {
  this.collection = {};

  this.add = function (key, value) {
    this.collection[key] = value;
  };

  this.remove = function (key) {
    delete this.collection[key];
  };

  this.get = function (key) {
    return this.collection[key];
  };

  this.has = function (key) {
    return this.collection[key] ? true : false;
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.size = function () {
    return this.values().length;
  };

  this.clear = function () {
    this.collection = {};
  };
};
