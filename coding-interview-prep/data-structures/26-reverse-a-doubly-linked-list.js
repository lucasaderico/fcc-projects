// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/reverse-a-doubly-linked-list

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.reverse = function () {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }

    this.tail = this.head;
    this.head = prev;
  };
};
