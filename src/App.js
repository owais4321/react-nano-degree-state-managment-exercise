import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {

state={
value1:Math.floor(Math.random() * 100),
value2:Math.floor(Math.random() * 100),
value3:Math.floor(Math.random() * 100),
numQuestions:0,
numCorrect:0,
proposedAnswer :0
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<Game/>
          
        </div>
    );
  }
}

export default App;
