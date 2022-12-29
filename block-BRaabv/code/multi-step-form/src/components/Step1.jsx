import React from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep != 1) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={this.props.email}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Step1;
