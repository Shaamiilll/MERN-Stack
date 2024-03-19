// BST

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const NewNode = new Node(value);
    if (this.isEmpty()) {
      this.root = NewNode;
    } else {
      this.insertNode(this.root, NewNode);
    }
  }
  insertNode(root, NewNode) {
    if (NewNode.value < root.value) {
      if (root.left == null) {
        root.left = NewNode;
      } else {
        this.insertNode(root.left, NewNode);
      }
    } else {
      if (root.right === null) {
        root.right = NewNode;
      } else {
        this.insertNode(root.right, NewNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value == value) {
        return true;
      } else if (value < root.left) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Inorder
  logValues(node = this.root) {
    if (node) {
      this.logValues(node.left);
      console.log(node.value);
      this.logValues(node.right);
    }
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(30);

bst.logValues();
