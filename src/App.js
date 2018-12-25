import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artwork from './components/Artwork.react';
import circles from './artworks/circles.js';
import starryNight from './artworks/starryNight.js';
import mengerSpongeFractal from './artworks/mengerSpongeFractal.js';
import sine from './artworks/sine.js';
import cubeWave from './artworks/cubeWave.js';
import torus from './artworks/torus.js';
import textDuplication from './artworks/textDuplication.js';
import { BrowserRouter as Router } from 'react-router-dom';
import DuplicatingDraggable from './components/DuplicatingDraggable.react';

const ARTWORKS = [cubeWave, torus, starryNight, circles, mengerSpongeFractal, sine];
const SPECIAL_ARTWORKS = [
  <DuplicatingDraggable>
    <div style={{color: 'red'}}>
      WOW
    </div>
  </DuplicatingDraggable>,
];

class App extends Component {
  state = {
    selectedArtID: 0,
  }

  handleDrag(e, data) {
    console.log(data.node);
    this.setState({draggedDuplicates: [...this.state.draggedDuplicates, data.node]});
  }

  render() {
    const selectedArt = ARTWORKS[this.state.selectedArtID];
    return (
        <div className="App">
          {/*{this.state.draggedDuplicates}*/}

          <div>
            <div style={{
              position: 'absolute',
              top: '0',
              backgroundColor: '#2B303A',
              color: '#E7ECEF',
              left: '50%',
              WebkitTransform: 'translateX(-50%)',
              transform: 'translateX(-50%)',
              padding: '10px',
            }}>
              {ARTWORKS.map((art, i) => (
                <a
                  key={`art_${i}`}
                  href="#"
                  style={{marginLeft: '5px', marginRight: '5px'}}
                  onClick={() => this.setState({selectedArtID: i})}>
                  Masterpiece #{i+ 1}
                </a>
              ))}
              {SPECIAL_ARTWORKS.map((art, i) => (
                <a
                  key={`art_${ARTWORKS.length + i}`}
                  href="#"
                  style={{marginLeft: '5px', marginRight: '5px'}}
                  onClick={() => this.setState({selectedArtID: ARTWORKS.length + i})}>
                  Masterpiece #{ARTWORKS.length + i + 1}
                </a>
              ))}
            </div>
          </div>
          {this.state.selectedArtID >= ARTWORKS.length
            ? SPECIAL_ARTWORKS[this.state.selectedArtID - ARTWORKS.length]
            : <Artwork art={selectedArt} />
          }
        </div>
    );
  }
}

export default App;
