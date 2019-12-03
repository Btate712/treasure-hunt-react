import React from 'react';
import { connect } from 'react-redux';
import login from '../actions/login';
import LoginForm from '../components/LoginForm';
import URL from '../appData/URL'
import { Redirect } from 'react-router-dom';
import checkToken from '../actions/checkToken';

class LoginContainer extends React.Component {

  componentDidMount() {
    this.props.checkToken(URL);
  }

  mainOrLogin() {
    if(this.props.user.loggedIn) {
      return ( <Redirect to="/hunts" /> );
    } else {
      return ( <LoginForm login={this.props.login} /> );
    }
  }

  render() {
    return (
      <div>
        { this.mainOrLogin() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    checkToken: (url) => dispatch(checkToken(url)),
    login: (url, name, password) => dispatch(login(url, name, password)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
