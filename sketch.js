function setup() {
    createCanvas(windowWidth, windowHeight);
    storyTree = new Tree();
  }
  
  function draw() {
    background(220);
    let root = storyTree.addRoot("hello");
    root.setRight("bye");
    text(root.getElement(), width/2, height/2);
    console.log(storyTree.root);
    noLoop();
  }