import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import './App.css';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pixels: '18',
    };
  }
  handleText = (e) => {
    this.setState((prevState) => {
      return {
        text: e.target.value,
      };
    });
  };
  handlePixels = (e) => {
    this.setState({
      pixels: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>Font-Tester</h1>
          <Header
            handleText={this.handleText}
            text={this.state.text}
            pixels={this.state.pixels}
            handlePixels={this.handlePixels}
          />
        </div>
        <Cards text={this.state.text} pixels={this.state.pixels} />
      </div>
    );
  }
}

export default App;
