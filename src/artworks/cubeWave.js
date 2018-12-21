const CANVAS_SIZE = 700;
const BLOCK_SIZE = 20;
let angle;

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(CANVAS_SIZE, CANVAS_SIZE, sk.WEBGL);
    sk.ortho();
    angle = 0;
  };



  sk.draw = () => {
    sk.background('#F9F9F9');
    sk.ambientMaterial('white');
    sk.directionalLight(239, 236, 186, -1, -2, -1);
    sk.directionalLight(12, 36, 79, 1, -1, -1);
    sk.directionalLight(161, 226, 219, 0, 1, 0);
    sk.noStroke();
    sk.translate(-CANVAS_SIZE / 3, 0, 0);
    sk.rotateX(-sk.PI / 4);
    sk.rotateY(sk.PI / 5.104355);

    const CUBE_SIZE = 350;

    for (let x = 0; x < CUBE_SIZE; x += BLOCK_SIZE) {
        for (let z = 0; z < CUBE_SIZE; z += BLOCK_SIZE) {
            sk.push();
            let offset = sk.map(
                Math.pow(
                  sk.dist(x + BLOCK_SIZE / 2, z + BLOCK_SIZE / 2, CUBE_SIZE / 2, CUBE_SIZE / 2),
                  1.2
                ),
                0,
                CUBE_SIZE / 2,
                -sk.PI / 3,
                sk.PI / 3);
            let height = Math.floor(sk.map(sk.sin(angle + offset), -1, 1, 100, 320));
            sk.translate(x, 0, z);
            sk.box(BLOCK_SIZE, height, BLOCK_SIZE);
            sk.pop();
        }
    }

    angle -= 0.06;
  };

};

export default s;
