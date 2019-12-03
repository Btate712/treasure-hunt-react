import React from 'react';
import './App.css';
import HuntsIndexContainer from './containers/Hunts/HuntsIndexContainer';
import HuntsShowContainer from './containers/Hunts/HuntsShowContainer';
import LoginContainer from './containers/LoginContainer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LoginContainer />
            </Route>
            <Route
              path="/hunts/:id"
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
    token: state.user.token
  });
}

export default connect(mapStateToProps)(App);
