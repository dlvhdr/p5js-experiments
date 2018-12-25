const CANVAS_SIZE = 1000;

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  };

  sk.draw = () => {
    sk.textSize(32);
    sk.fill('black');
    // sk.stroke(0, 102, 153);
    sk.text('word', 500, 500);
  };

  sk.mouseDragged = () => {
    if (sk.frameCount % 3 !== 0) {
      return;
    }
    sk.text('word', sk.mouseX, sk.mouseY);
  };
};

export default s;
