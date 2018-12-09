import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box.js';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <div className='game-board'>
          <Box />
        </div>
      </div>
      );
  }
}

export default App;
