// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-depth-first-search-in-a-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.inorder = function () {
    if (!this.root) return null;

    function traverse(node, result = []) {
      if (!node) return result;

      traverse(node.left, result);
      result.push(node.value);
      traverse(node.right, result);

      return result;
    }

    return traverse(this.root);
  };

  this.preorder = function () {
    if (!this.root) return null;

    function traverse(node, result = []) {
      if (!node) return result;

      result.push(node.value);
      traverse(node.left, result);
      traverse(node.right, result);

      return result;
    }

    return traverse(this.root);
  };

  this.postorder = function () {
    if (!this.root) return null;

    function traverse(node, result = []) {
      if (!node) return result;

      traverse(node.left, result);
      traverse(node.right, result);
      result.push(node.value);

      return result;
    }

    return traverse(this.root);
  };
}
