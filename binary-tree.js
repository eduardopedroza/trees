/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0; 

    let depth = 0;
    let queue = [this.root]; 

    while (queue.length > 0) {
      let levelSize = queue.length;
      depth += 1;

      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift(); 

        if (currentNode.left === null && currentNode.right === null) {
          return depth; 
        }

        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
      }
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const calculateDepth = (node) => {
      if (node === null) return 0;

      let leftDepth = calculateDepth(node.left);
      let rightDepth = calculateDepth(node.right);

      return 1 + Math.max(leftDepth, rightDepth);
    };

    return calculateDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity; 

    function findMaxPath(node) {
      if (node === null) return 0; 

      let leftGain = Math.max(0, findMaxPath(node.left));
      let rightGain = Math.max(0, findMaxPath(node.right));

      let currentMaxPath = node.val + leftGain + rightGain;

      maxSum = Math.max(maxSum, currentMaxPath);

      return node.val + Math.max(leftGain, rightGain);
    }

    findMaxPath(this.root);

    return maxSum === -Infinity ? 0 : maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = { value: null };

    function dfs(node) {
      if (node === null) return;

      if (node.val > lowerBound) {
        if (result.value === null || node.val < result.value) {
          result.value = node.val;
        }
      }

      dfs(node.left);
      dfs(node.right);
    }

    dfs(this.root);

    return result.value;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
