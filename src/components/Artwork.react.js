import React, { Component } from 'react';
import P5Wrapper from './P5Wrapper.react';

class Artwork extends Component {

  render() {
    return (
      <div>
        <P5Wrapper sketch={this.props.art} />
      </div>
    );
  }
}

export default Artwork;
