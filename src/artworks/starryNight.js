import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let starryNight = (sk) => {
  const CANVAS_SIZE = 1000;
  sk.createCanvas(CANVAS_SIZE,CANVAS_SIZE);
  sk.background(40);
  sk.stroke('red');
  sk.strokeWeight(3);
  sk.fill(0);
  sk.angleMode(sk.DEGREES);
  sk.imageMode(sk.CENTER);
  sk.translate(CANVAS_SIZE/2,CANVAS_SIZE/2);

  let gfx = sk.createGraphics(CANVAS_SIZE,CANVAS_SIZE);
  gfx.stroke('red');
  gfx.strokeWeight(5);

  for (let i=0; i < 1000; i++) {
    gfx.point(
        Math.random() * CANVAS_SIZE,
        Math.random() * CANVAS_SIZE
    );
  }

  sk.image(gfx,0,0);
  sk.rotate(1);
  let gfx2 = Object.assign({}, gfx);
  sk.image(gfx2, 0, 0);
};

let s = (sk) => {
  sk.setup = () => {
    starryNight(sk);
  };

  sk.draw = () => {

  };
};

export default s;
