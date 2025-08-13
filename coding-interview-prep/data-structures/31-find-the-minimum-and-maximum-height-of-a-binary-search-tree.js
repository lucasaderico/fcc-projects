// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-height-of-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.height = function (node) {
    if (!node) return -1;
    let left = this.height(node.left);
    let right = this.height(node.right);
    return Math.max(left, right) + 1;
  };

  this.findMaxHeight = function () {
    return this.height(this.root);
  };

  this.findMinHeight = function () {
    if (!this.root) return -1;

    const arr = [this.root];
    let count = -1;
    let test = false;

    while (arr.length) {
      let lvl = arr.length;
      for (let i = 0; i < lvl; ++i) {
        const node = arr.shift();
        if (!node.left && !node.right) {
          test = true;
          break;
        }
        if (node.left) arr.push(node.left);
        if (node.right) arr.push(node.right);
      }
      count++;
      if (test) break;
    }
    return count;
  };

  this.isBalanced = function () {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  };
}
