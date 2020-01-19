import React, { Component, useState } from 'react';
import './App.css';
import getText from './getText';
import Preview from './Preview';

const initialState = {
  text: getText(),
  userInput: '',
  wpm: 0,
  symbols: 0,
  sec: 10,
  started: false,
  finished: false
}

class App extends Component {
  state = initialState;

  /*componentDidMount = () => {
    this.setState(initialState);
  }*/

  onRestart = () => {
    this.setState(initialState);
  }

  //when user starts typing
  onUserInputChange = (e) => {
    const ev = e.target.value;
    //start timer
    //count correct # of sym
  }

  render(){
    return (
      <div>
        <div className="timeLeft" value={this.state.sec}> time left: {this.state.sec} </div>
        <Preview text={this.state.text} userInput={this.state.userInput}/> 
        <textarea
          value={this.state.userInput}
          onChange={this.onUserInputChange}
          placeholder="Start typing..."
        ></textarea>
      </div>
    );
  }
}

export default App;
