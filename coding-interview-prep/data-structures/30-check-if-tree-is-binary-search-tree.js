// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/check-if-tree-is-binary-search-tree

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

function isBinarySearchTree(tree) {
  const root = tree.root;
  return check(root);
}

function check(node, min = -Infinity, max = Infinity) {
  if (!node) return true;

  if (node.value <= min || node.value >= max) return false;

  return (
    check(node.left, min, node.value) && check(node.right, node.value, max)
  );
}

const bst = new BinarySearchTree();
bst.add(8);
bst.add(2);
bst.add(10);
bst.add(4);
bst.add(2);
bst.add(18);

console.log(isBinarySearchTree(bst));
