const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;  
      return;
    }
    let currentNode = this.rootNode;
    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;  
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
  }
    
  min() {
    let currentNode = this.rootNode;
    while (currentNode && currentNode.left !== null) {
      currentNode = currentNode.left;  
    }
    return currentNode ? currentNode.data : null;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode && currentNode.right !== null) {
      currentNode = currentNode.right; 
    }
    return currentNode ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};