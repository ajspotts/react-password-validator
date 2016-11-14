import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validator from './Validator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Validator</h2>
        </div>
        <Validator />
      </div>
    );
  }
}

export default App;
