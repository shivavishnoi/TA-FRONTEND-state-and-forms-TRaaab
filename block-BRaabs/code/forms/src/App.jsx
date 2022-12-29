import React from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      zip: '',
      country: '',
      billCheck: false,
      error: {
        address: '',
      },
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert('form submitted');
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Shipping Address</h1>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <span>Error</span>
          </div>
          <label htmlFor="city">City</label>
          <input
            onChange={this.handleChange}
            id="city"
            name="city"
            value={this.state.city}
          />
          <label htmlFor="zip">zip</label>
          <input
            onChange={this.handleChange}
            id="zip"
            name="zip"
            value={this.state.zip}
          />
          <label htmlFor="country">country</label>
          <input
            onChange={this.handleChange}
            id="country"
            name="country"
            value={this.state.country}
          />
          <input value="submit" type="submit" />
        </form>
        //Billing
        <form>
          <h1>Billing Address</h1>
          <label htmlFor="check">Same as Permanent Address</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.setState({
                billCheck: e.target.checked,
              });
            }}
            id="check"
          />
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              // onChange={this.handleChange}
              value={this.state.billCheck ? this.state.address : ''}
            />
            <span>Error</span>
          </div>
          <label htmlFor="city">City</label>
          <input
            //onChange={this.handleChange}
            id="city"
            name="city"
            value={this.state.billCheck ? this.state.city : ''}
          />
          <label htmlFor="zip">zip</label>
          <input
            //onChange={this.handleChange}
            id="zip"
            name="zip"
            value={this.state.billCheck ? this.state.zip : ''}
          />
          <label htmlFor="country">country</label>
          <input
            // onChange={this.handleChange}
            id="country"
            name="country"
            value={this.state.billCheck ? this.state.country : ''}
          />
          <input value="submit" type="submit" />
        </form>
      </>
    );
  }
}

export default App;
