// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-doubly-linked-list

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.add = function (data) {
    const newNode = new Node(data, null);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  };

  this.remove = function (data) {
    if (this.head === null) return null;

    if (this.head.data === data) {
      this.head = this.head.next;
    }

    if (this.tail.data === data) {
      this.tail = this.tail.prev;
    }

    let curr = this.head;

    while (curr) {
      if (curr.data === data) {
        if (curr.prev) {
          curr.prev.next = curr.next;
        }
        if (curr.next) {
          curr.next.prev = curr.prev;
        }
      }
      curr = curr.next;
    }
  };
};
