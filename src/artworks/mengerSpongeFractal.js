const CANVAS_SIZE = 400;
let a = 0;
let levels = 0;
let boxes = [];
let boxSize = 200;

class Box {
  constructor(sk, height, x, y, z) {
    this.sk = sk;
    this.height = height;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  draw() {
    this.sk.push();
    this.sk.translate(this.x, this.y, this.z);
    this.sk.box(this.height);
    this.sk.pop();
  }

  split() {
    let boxes = [];
    const newBoxHeight = this.height / 3;
    for (let z = 0; z < 3; z++) {
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (
            (x === y && x === 1) ||
            (x === z && z === 1) ||
            (y === z && y === 1)) {
            continue;
          }

          boxes.push(new Box(
            this.sk,
            newBoxHeight,
            -newBoxHeight + this.x + newBoxHeight * x,
            -newBoxHeight + this.y + newBoxHeight * y,
            -newBoxHeight + this.z + newBoxHeight * z)
          );
        }
      }
    }

    return boxes;
  }
}

let s = (sk) => {
  sk.setup = () => {
    boxes = [new Box(sk, boxSize, 0, 0, 0)];
    let cnv = sk.createCanvas(CANVAS_SIZE, CANVAS_SIZE, sk.WEBGL);
    sk.angleMode(sk.DEGREES);
    sk.normalMaterial();
    sk.noStroke();
    sk.background('black');
  };



  sk.draw = () => {
    let start = sk.millis();

    sk.background('black');
    sk.rotateX(a);
    sk.rotateY(a * 0.4);
    sk.rotateZ(a * 0.1);
    boxes.map(box => box.draw());
    a += 0.2;
  };

  sk.mousePressed = () => {
    let start = sk.millis();
    boxes = boxes.map(box => box.split()).flat();
    let end = sk.millis();
    let elapsed = end - start;
    console.log("This took: " + elapsed + "ms.");
  };
};

export default s;
