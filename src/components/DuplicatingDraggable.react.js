import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './DuplicatingDraggable.css';

class DuplicatingDraggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedDuplicates: [],
    };
  }

  handleDrag(e) {
    this.setState({
      draggedDuplicates: [
        ...this.state.draggedDuplicates,
        React.cloneElement(
          this.props.children,
          {
            key: `duplicate-${this.state.draggedDuplicates.length}`,
            style: {position: 'absolute', top: e.clientY, left: e.clientX}}
        )
      ]
    });
  }

  render() {
    return (
      <div>
        {this.state.draggedDuplicates}
        <div
          style={{cursor: 'all-scroll', padding: '10px'}}>
          <Draggable

            onDrag={this.handleDrag.bind(this)}>
            {this.props.children}
          </Draggable>
        </div>
      </div>
    );
  }
}

export default DuplicatingDraggable;
