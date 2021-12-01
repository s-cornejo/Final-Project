class Tree {
  
    constructor() {
      this.size = 0;
      this.root = null;
    }
    
    size() {
      return this.size;
    }
    
    root() {
      return this.root;
    }
    
    addRoot(v) {
      if (this.size == 0) {
        this.root = new Node(v, null, null, null);
        this.size ++;
      } 
      else {
        var oldRoot = this.root;
        this.root = new Node(v, null, oldRoot, null);
        this.size ++;
      }
      return this.root;
    }
    
    parent(v) {
      return v.getParent();
    }
    
    left(v) {
      return v.getLeft();
    }
    
    addLeft(v, n) {
      var leftNode = new Node(n, v, null, null);
      v.setLeft(leftNode);
      this.size ++;
      return leftNode;
    }
    
    right(v) {
      return v.getRight();
    }
    
    addRight(v, n) {
      var rightNode = new Node(n, v, null, null);
      v.setRight(rightNode);
      this.size ++;
      return rightNode;
    }
    
  }