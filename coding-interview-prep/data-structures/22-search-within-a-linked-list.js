// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list

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
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    return head === null;
  };

  this.indexOf = function (element) {
    let curr = head;
    let count = 0;

    while (curr && curr.element !== element) {
      curr = curr.next;
      count++;
    }

    if (!curr) return -1;

    return count;
  };

  this.elementAt = function (idx) {
    let curr = head;
    let count = 0;

    while (curr && count < idx) {
      curr = curr.next;
      count++;
    }

    if (!curr) return undefined;

    return curr.element;
  };
}
