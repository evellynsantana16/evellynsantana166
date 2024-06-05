function setup() {
    createCanvas(400, 400);
    background("orange")
  }
  
  function draw() {
    stroke("yellow");
    fill("purple");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }