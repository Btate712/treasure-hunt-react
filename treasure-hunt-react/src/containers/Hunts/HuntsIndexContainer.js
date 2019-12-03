import React from 'react';
import { connect } from 'react-redux';
import getHunts from '../../actions/getHunts';
import URL from '../../appData/URL';
import Hunt from '../../components/Hunt';
import { Redirect } from 'react-router-dom'

class HuntsIndexContainer extends React.Component {

  componentDidMount = () => {
    if(this.props.user.loggedIn) {
      console.log(this.props);
      this.props.getHunts(URL, this.props.token);
    }
  }

  renderHunts = () => {
    const hunts = this.props.hunts.hunts;
    if(hunts !== []) {
      console.log(hunts);
      return hunts.map((hunt, index) => <Hunt key={index} hunt={hunt} />);
    } else {
      return null;
    }
  }

  renderOrLogin = () => {
    if(this.props.user.loggedIn) {
      return (
        <div>
          <h1>Hunts:</h1>
          {this.renderHunts()}
          <button onClick={() => console.log(this.props.hunts)}>Show Props</button>
        </div> );
    } else {
      return ( <Redirect to="/login" /> );
    }
  }

  render() {
    return (
      <>
        { this.renderOrLogin() }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    hunts: state.huntsData,
    user: state.user
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getHunts: (url, authToken) => dispatch(getHunts(url, authToken))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntsIndexContainer);
