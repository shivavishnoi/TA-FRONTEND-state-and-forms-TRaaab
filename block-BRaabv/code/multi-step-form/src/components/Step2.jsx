import React from 'react';
class Step2 extends React.Component {
  render() {
    if (this.props.currentStep != 2) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={this.props.username}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Step2;
