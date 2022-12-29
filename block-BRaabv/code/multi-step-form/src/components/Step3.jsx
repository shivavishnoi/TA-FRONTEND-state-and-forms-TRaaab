import React from 'react';
class Step3 extends React.Component {
  render() {
    if (this.props.currentStep != 3) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={this.props.password}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Step3;
