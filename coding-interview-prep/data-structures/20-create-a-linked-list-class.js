// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    const node = new Node(element);

    if (head === null) {
      head = node;
      length++;
      return;
    }

    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;
    length++;
  };
}
