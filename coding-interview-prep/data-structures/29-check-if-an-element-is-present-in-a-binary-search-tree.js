// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.isPresent = function (num) {
    if (!this.root) return false;

    let curr = this.root;
    let test = false;

    while (curr) {
      if (curr.value === num) {
        test = true;
        break;
      }

      if (num < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return test;
  };
}
