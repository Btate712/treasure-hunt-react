import React from 'react';
import { connect } from 'react-redux';
import getHunts from '../actions/getHunts';

class HuntsContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHunts(this.props.token);
  }

  renderHunts = () => {
    if(this.props.huntData.hunts !== []) {
      return this.props.hunts.map(hunt => <div>{hunt.title}</div>);
    } else {
      return null;
    }

  }

  render() {
    console.log(this.props.hunts);
    return (
      <div>
        <h1>Hunts:</h1>
        {this.renderHunts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    hunts: state.hunts,
    token: state.user.token
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getHunts: (authToken) => dispatch(getHunts(authToken))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntsContainer);
