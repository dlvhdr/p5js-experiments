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
import { BrowserRouter as Router } from 'react-router-dom';

const ARTWORKS = [torus, cubeWave, starryNight, circles, mengerSpongeFractal, sine];

class App extends Component {
  state = {
    selectedArtID: 0,
  }

  render() {
    const selectedArt = ARTWORKS[this.state.selectedArtID];
    return (
        <div className="App">
          <div style={{
            'position': 'absolute',
            'top': '0',
            'backgroundColor': 'black',
            'left': '50%',
            'WebkitTransform': 'translateX(-50%)',
            'transform': 'translateX(-50%)',
            'padding': '10px',
          }}>
            {ARTWORKS.map((art, i) => (
              <a
                key={`art_${i}`}
                href="#"
                style={{marginLeft: '5px', marginRight: '5px'}}
                onClick={() => this.setState({selectedArtID: i})}>
                Art #{i}
              </a>
            ))}
          </div>
          <Artwork art={selectedArt} />
        </div>
    );
  }
}

export default App;
