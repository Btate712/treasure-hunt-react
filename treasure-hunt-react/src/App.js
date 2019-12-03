import React from 'react';
import './App.css';
import HuntsIndexContainer from './containers/Hunts/HuntsIndexContainer';
import HuntsShowContainer from './containers/Hunts/HuntsShowContainer';
import LoginContainer from './containers/LoginContainer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {

  mainOrLogin() {
    return this.props.user.loggedIn ? <Redirect to="/hunts" /> : <Redirect to="/login" />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {this.mainOrLogin()}
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/hunts/:id"
              render={({match}) => {
                const id = match.params.id
                return (<HuntsShowContainer huntId={id}/>)
              }}
            />
            <Route path="/hunts">
              <HuntsIndexContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  });
}

export default connect(mapStateToProps)(App);
