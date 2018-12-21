let circles = (sk) => {
  sk.remove();
  const CANVAS_SIZE = 1000;
  let cnv = sk.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  sk.background('black');
  sk.noFill();
  sk.stroke('white');
  sk.strokeWeight(3);
  sk.angleMode(sk.DEGREES);
  sk.imageMode(sk.CENTER);
  const CIRCLE_RADIUS = 500;
  sk.stroke('white');

  sk.translate(CANVAS_SIZE / 2 - 5, CANVAS_SIZE / 3);
  const NUM_CIRCLES = 100;
  const COLORS = ['#5B1844', '#940C3C', '#CA0032', '#FF572A', '#FFC310'];
  for (let i = 0; i < NUM_CIRCLES; i++) {
    sk.stroke(COLORS[i % COLORS.length]);
    sk.ellipse(0, 0, CIRCLE_RADIUS, CIRCLE_RADIUS);
    sk.translate(10, 0);
    sk.rotate(360 / NUM_CIRCLES);
  }
};

let s = (sk) => {
  sk.setup = () => {
    circles(sk);
  };

  sk.draw = () => {

  };
};

export default s;
