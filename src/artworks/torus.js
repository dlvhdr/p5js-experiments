const CANVAS_SIZE = 550;
const BLOCK_SIZE = 20;
let angle = 0;
let yAngle = 0;
let colorOffset = 0;
const RADIUS = 160;
const NUM_CIRCLES = 70;
const INNER_RADIUS = 50;
let circles = [];
let canvas;

// var capturer = new CCapture( { format: 'gif', workersPath: '/', framerate: 60 } );

class DottedCircle {
  constructor(sk, x, y, r, colorOffset) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorOffset = colorOffset;
  }

  draw() {
    this.sk.push();
    this.sk.translate(0, 0, this.y);
    this.sk.rotateY(this.sk.HALF_PI);
    this.sk.rotateZ(angle);

    const COLORS = ['#ff00ce', '#fbf44f', '#6cd9f9'];
    const NUM_CIRCLES = 10;
    let currentOffset = 0;
    for (let j = 0; j < COLORS.length; j++) {
      this.sk.fill(COLORS[(j + this.colorOffset) % COLORS.length]);
      this.sk.rotateZ(this.sk.TWO_PI / COLORS.length);
      for (let i = 0; i < NUM_CIRCLES; i++) {
        this.sk.rotateZ(this.sk.TWO_PI / NUM_CIRCLES);

        this.sk.push();
        this.sk.translate(this.r, this.r, 0);
        this.sk.sphere(1.7);
        this.sk.pop();
      }

      currentOffset++;
    }

    this.sk.pop();
  }
}

let s = (sk) => {
  sk.setup = () => {
    circles = [];
    colorOffset = 0;
    canvas = sk.createCanvas(CANVAS_SIZE, CANVAS_SIZE, sk.WEBGL);
    sk.fill('white');
    for (let i = 0; i < NUM_CIRCLES; i++) {
      circles.push(new DottedCircle(sk, RADIUS, RADIUS, INNER_RADIUS, colorOffset));
      colorOffset++;
    }
    // capturer.start();
  };



  sk.draw = () => {
    sk.background('black');
    sk.translate(0, -40, 0);
    sk.noStroke();

    sk.rotateX(-0.9);
    // sk.sphere(50);
    // sk.rotateZ(angle);
    sk.rotateY(yAngle);


    sk.push();
    sk.rotateX(sk.PI / 2);
    sk.fill('black');
    sk.torus(RADIUS, INNER_RADIUS + INNER_RADIUS / 3 + 3);
    sk.pop();

    // sk.fill('white');

    let rotateBy = sk.TWO_PI / NUM_CIRCLES;
    for (let i = 0; i < NUM_CIRCLES; i++) {
      let circle = circles[i];
      circle.draw();
      sk.rotateY(rotateBy);
    }

    angle += 0.008;
    yAngle += 0.003;

    // capturer.capture(document.getElementsByTagName('canvas')[0]);
  };

  sk.mousePressed = () => {
    // capturer.stop();

    // default save, will download automatically a file called {name}.extension (webm/gif/tar)
    // capturer.save();
  };
};

export default s;
