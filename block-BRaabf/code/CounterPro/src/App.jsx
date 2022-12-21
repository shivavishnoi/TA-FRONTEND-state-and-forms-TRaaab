import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      steps: 1,
      max: Infinity,
    };
  }
  handleIncrease = () => {
    if (this.state.count + this.state.steps <= this.state.max) {
      this.setState({
        count: this.state.count + this.state.steps,
      });
    }
  };
  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - this.state.steps,
      });
    }
  };
  handleReset = () => {
    this.setState({
      count: 0,
      steps: 1,
      max: Infinity,
    });
  };
  setMax = (e) => {
    this.setState({
      max: Number(e.target.dataset.id),
    });
  };
  setSteps = (e) => {
    this.setState({
      steps: Number(e.target.dataset.id),
    });
  };
  render() {
    return (
      <div className="app">
        <h1>{this.state.count}</h1>
        <div className="mid">
          <div className="steps">
            <span>Steps- </span>
            <button
              data-id="5"
              onClick={(e) => {
                this.setSteps(e);
              }}
            >
              5
            </button>
            <button
              data-id="10"
              onClick={(e) => {
                this.setSteps(e);
              }}
            >
              10
            </button>
            <button
              data-id="15"
              onClick={(e) => {
                this.setSteps(e);
              }}
            >
              15
            </button>
          </div>
          <div className="maxVal">
            <span>Max limit- </span>
            <button
              data-id="15"
              onClick={(e) => {
                this.setMax(e);
              }}
            >
              15
            </button>
            <button
              data-id="100"
              onClick={(e) => {
                this.setMax(e);
              }}
            >
              100
            </button>
            <button
              data-id="200"
              onClick={(e) => {
                this.setMax(e);
              }}
            >
              200
            </button>
          </div>
          <div className="operation">
            <span>Operation- </span>
            <button onClick={this.handleIncrease}>Increment</button>
            <button onClick={this.handleDecrease}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
