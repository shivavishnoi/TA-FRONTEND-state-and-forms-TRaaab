import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, email: '', username: '', password: '' };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, username } = this.state;
    alert(username + ' with ' + email + 'is saved');
  };
  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({ currentStep });
  };
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep });
  };
  get previousButton() {
    if (this.state.currentStep != 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }
  get nextButton() {
    if (this.state.currentStep < 3) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  render() {
    return (
      <>
        <h1>A Wizard Form!!</h1>
        <span>Step {this.state.currentStep}</span>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </>
    );
  }
}
export default MasterForm;
