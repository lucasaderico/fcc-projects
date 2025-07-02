// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function (value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined;
    }

    let curr = this.root;

    while (curr) {
      if (curr.value === value) return null;

      if (value <= curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        } else {
          curr = curr.left;
        }
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return;
        } else {
          curr = curr.right;
        }
      }
    }
  };
}
