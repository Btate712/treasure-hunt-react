import React from 'react';
import { connect } from 'react-redux';
import login from '../actions/login';
import LoginForm from '../components/LoginForm';

class LoginContainer extends React.Component {
  render() {
    return (<LoginForm login={this.props.login} />)
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (name, password) => dispatch(login(name, password)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
