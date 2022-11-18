class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var root = null;
  var node = new TreeNode(1);
  root = node;
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  function preOrder(rootNode) {
    if(rootNode != null) {
      console.log(rootNode.value);
      preOrder(rootNode.left);
      preOrder(rootNode.right);
    }
  }
  
  
  function InOrder(rootNode) {
    if(rootNode != null) {
      InOrder(rootNode.left);
      console.log(rootNode.value);
      InOrder(rootNode.right);
    }
  }
  
  function postOrder(rootNode) {
    if(rootNode != null) {
      postOrder(rootNode.left);
      postOrder(rootNode.right);
      console.log(rootNode.value);
  
    }
  }
  
  console.log("PreOrder Traversal");
  preOrder(root);
  
  console.log("InOrder Traversal");
  InOrder(root);
  
  console.log("PostOrder Traversal");
  postOrder(root);