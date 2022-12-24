import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { data } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      status: 'hidden',
    };
  }
  handleClick = (e, i) => {
    if (this.state.status === 'hidden') {
      this.setState({ index: i, status: 'visible' });
    }
    if (this.state.status === 'visible') {
      this.setState({ index: i, status: 'hidden' });
    }
  };
  render() {
    return (
      <div className="app">
        <header>
          <h1>FAQ's</h1>
        </header>
        {data.map((que, i) => {
          return (
            <div className="item" key={i}>
              <div className="question">
                <p>{que.Q}</p>
                <span onClick={(e) => this.handleClick(e, i)}>
                  {this.state.status === 'visible' && this.state.index == i
                    ? '☝️'
                    : '👇'}
                </span>
              </div>
              <div
                className={
                  this.state.status === 'visible' && this.state.index == i
                    ? 'visible answer'
                    : 'hidden answer'
                }
              >
                <p>{que.A}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
