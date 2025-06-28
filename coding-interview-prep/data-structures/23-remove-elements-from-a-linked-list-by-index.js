// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.removeAt = function (index) {
    if (index < 0 || index > length - 1) return null;

    let curr = head;
    let prev = null;
    let count = 0;

    while (curr && count < index) {
      prev = curr;
      curr = curr.next;
      count++;
    }

    if (!prev) {
      head = head.next;
      length--;
      return curr.element;
    }

    prev.next = curr.next;
    length--;
    return curr.element;
  };
}
