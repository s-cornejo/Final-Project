class Node { 
    constructor(e, p, l, r) {
      this.element = e;
      this.parent = p;
      this.left = l;
      this.right = r;
    }
    
    getParent() {
      return this.parent;
    }
    
    setParent(v) {
      this.parent = v;
    }
    
    hasLeft() {
      return (this.left != null);
    }
    
    setLeft(v) {
      this.left = v;
    }
    
    getLeft() {
      return this.left;
    }
    
    hasRight() {
      return (this.right != null);
    }
    
    setRight(v) {
      this.right = v;
    }
    
    getRight() {
      return this.right;
    }
    
    getElement() {
      return this.element;
    }
    
    setElement(e) {
      this.element = e;
    }
    
  }