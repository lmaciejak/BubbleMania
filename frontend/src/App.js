import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">BUBBLE MANIA</h1> 
        <div id="game"></div>
        <div id="store"></div>
      </div>
    );
  }
}

export default App;
