import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }
  render() {
    return (
      <>
        <div>
          <button
            onClick={() => {
              this.setState({ url: '/assets/tiger.jpg' });
            }}
          >
            Tiger
          </button>
          <button
            onClick={() => {
              this.setState({ url: '/assets/pubg.jpeg' });
            }}
          >
            Pubg
          </button>
          <button
            onClick={() => {
              this.setState({ url: '/assets/laptop.jpg' });
            }}
          >
            Laptop
          </button>
          <button
            onClick={() => {
              this.setState({ url: '/assets/cricket.jpg' });
            }}
          >
            Cricket
          </button>
          <button
            onClick={() => {
              this.setState({ url: '/assets/phone.jpg' });
            }}
          >
            Phone
          </button>
          <button
            onClick={() => {
              this.setState({ url: '/assets/basketball.jpg' });
            }}
          >
            BasketBall
          </button>
        </div>
        <div>
          <img src={this.state.url} width="400px" />
        </div>
      </>
    );
  }
}

export default App;
