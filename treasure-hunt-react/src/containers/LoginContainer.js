import React from 'react';
import { connect } from 'react-redux';
import login from '../actions/login';
import LoginForm from '../components/LoginForm';
import URL from '../appData/URL'
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {

  checkToken() {
    return !!this.props.user.token ? <Redirect to='/hunts' /> : <LoginForm login={this.props.login} url={URL} />
  }

  render() {
    return ( this.checkToken() )
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (url, name, password) => dispatch(login(url, name, password)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
