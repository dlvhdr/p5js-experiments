import React from 'react';
import p5 from '../p5.js';

p5.disableFriendlyErrors = true;

class P5Wrapper extends React.Component {
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.canvas.remove();
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}

export default P5Wrapper;
