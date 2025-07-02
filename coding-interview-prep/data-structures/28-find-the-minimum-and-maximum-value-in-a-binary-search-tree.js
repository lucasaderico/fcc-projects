// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMin = function () {
    if (!this.root) return null;

    let curr = this.root;
    let prev = null;

    while (curr) {
      prev = curr;
      curr = curr.left;
    }

    return prev.value;
  };

  this.findMax = function () {
    if (!this.root) return null;

    let curr = this.root;
    let prev = null;

    while (curr) {
      prev = curr;
      curr = curr.right;
    }

    return prev.value;
  };
}
