import React, { StrictMode } from 'react';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPass: '',

      error: {
        username: '',
        email: '',
        password: '',
        confirmPass: '',
      },
    };
  }
  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  handleChange = (e) => {
    let { name, value } = e.target;
    let errors = this.state.error;
    switch (name) {
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid';
        break;
      case 'username':
        errors.username = value.length >= 6 ? '' : 'Username is not valid';
        break;
      case 'password':
        errors.password = value.length >= 6 ? '' : 'password is not valid';
        break;
      case 'confirmPass':
        errors.confirmPass =
          value == this.state.password ? '' : 'Password does not match!';

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert('form submitted');
  };
  render() {
    let { username, email, password, confirmPass } = this.state.error;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register With Us</h1>
        <div>
          <label htmlFor="name">Username</label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            placeholder="Enter Username"
            id="name"
            name="username"
            className={username && 'error'}
          />
          <span>{username}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            placeholder="Enter Email"
            id="email"
            name="email"
            className={email && 'error'}
          />
          <span>{email}</span>
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            placeholder="Enter Password"
            id="pass"
            name="password"
            className={password && 'error'}
          />
          <span>{password}</span>
        </div>
        <div>
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            onChange={this.handleChange}
            type="password"
            value={this.state.confirmPass}
            placeholder="Confirm password"
            id="confirmPass"
            name="confirmPass"
            className={confirmPass && 'error'}
          />
          <span>{confirmPass}</span>
        </div>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default Register;
