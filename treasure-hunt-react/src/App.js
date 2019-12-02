import React from 'react';
import './App.css';
import HuntsContainer from './containers/HuntsContainer';
import LoginContainer from './containers/LoginContainer';
import { connect } from 'react-redux';

class App extends React.Component {
  huntsOrLogin = () => {
    return !!this.props.token ? <HuntsContainer /> : <LoginContainer />
  }

  render() {
    return (
      <div className="App">
        {this.huntsOrLogin()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    token: state.user.token
  });
}

export default connect(mapStateToProps)(App);
