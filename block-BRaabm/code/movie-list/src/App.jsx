import React, { useState } from 'react';
import './App.css';
import data from '../../data.json';
import Cards from './assets/components/Cards';
import Modal from './assets/components/Modal';
import Header from './assets/components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      index: null,
      showModal: false,
    };
  }
  handleMouseEnter = (e, i) => {
    if (this.state.showModal == false) {
      this.setState((prevState) => {
        return {
          hover: true,
          index: i,
        };
      });
    }
  };
  handleMouseLeave = (e) => {
    if (this.state.showModal == false) {
      this.setState((prevState) => {
        return {
          hover: false,
          index: null,
        };
      });
    }
  };
  showModal = (e, i) => {
    this.setState({
      showModal: true,
    });
  };
  closeModal = (e, i) => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <>
        <Header />
        <div className="App">
          {data.map((elm, i) => {
            return (
              <div key={i}>
                <div
                  onMouseEnter={(e) => this.handleMouseEnter(e, i)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <Cards item={elm} />
                  {this.state.hover && this.state.index == i ? (
                    <button onClick={(e) => this.showModal(e, i)}>
                      More Info
                    </button>
                  ) : (
                    ''
                  )}
                </div>
                {this.state.showModal == true && this.state.index == i ? (
                  <Modal details={elm} closeModal={this.closeModal} />
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
