// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}


function isSuperBalanced(node){
  //run bfs

  const queue = [node];
  let foundLeaf = false;
  while (queue.length !== 0){
    let currNode = queue.shift();
    if (node.left){
      queue.push(node.left)
    }
    if (node.right){
      queue.push(node.right);
    }
  }
}