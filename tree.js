/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    let sum = 0;
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      sum += currentNode.val;

      for (let child of currentNode.children) {
        queue.push(child);
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    let sum = 0;
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.val % 2 === 0) {
        sum += 1;
      }

      for (let child of currentNode.children) {
        queue.push(child);
      }
    }

    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    let sum = 0;
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.val > lowerBound) {
        sum += 1;
      }

      for (let child of currentNode.children) {
        queue.push(child);
      }
    }

    return sum;
  }
}

module.exports = { Tree, TreeNode };
