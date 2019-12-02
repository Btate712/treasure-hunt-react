import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: "temp",
    password: "temp"
  }

  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Username:</label>
        <input id="username" type="text" onChange={this.handleUserNameChange} value={this.state.username} />
        <br />
        <label>Password:</label>
        <input id="password" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default LoginForm
