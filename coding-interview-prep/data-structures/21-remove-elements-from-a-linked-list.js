// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list

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

  this.remove = function (element) {
    if (element === head.element) {
      head = head.next;
      length--;
      return;
    }

    let curr = head;
    let prev = null;
    while (curr) {
      if (curr.element === element) break;
      prev = curr;
      curr = curr.next;
    }

    if (!curr) return;

    prev.next = curr.next;
    length--;
  };
}
