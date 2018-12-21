const HEIGHT = 700;
const WIDTH = 1200;
const BLOCK_SIZE = 10;
let angle = 0;
let lines = [];
let wow = 0;

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, HEIGHT);
    sk.stroke('black');
    lines = [];
    for (let x = 0; x < sk.windowWidth; x+= BLOCK_SIZE) {
      lines.push({
        x1: x,
        y1: 0,
        x2: x,
        y2: sk.sin(angle) * 150,
        angle: angle,
      });

      angle += 0.1;
    }
  };



  sk.draw = () => {
    sk.translate(0, 200);
    sinWave(sk);
  };

  sk.mousePressed = () => {
    // sk.noLoop();
  };
};

let sinWave = (sk) => {
  sk.background('white');
  sk.stroke('black');
  for (let i = 0; i < lines.length; i++) {
    let newAngle = lines[i].angle + 0.02;
    lines[i] = Object.assign(lines[i], {
      y2: sk.sin(newAngle) * 150,
      angle: newAngle,
    });

    sk.line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
  }


};

export default s;
