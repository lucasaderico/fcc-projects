// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-breadth-first-search-in-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.levelOrder = function () {
    if (!this.root) return null;

    const queue = [this.root];
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      result.push(node.value);
    }

    return result;
  };

  this.reverseLevelOrder = function () {
    if (!this.root) return null;

    const queue = [this.root];
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
      result.push(node.value);
    }

    return result;
  };
}
